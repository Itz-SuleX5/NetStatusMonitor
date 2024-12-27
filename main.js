const { app, Tray } = require('electron');
const path = require('path');
const ping = require('ping');

let tray = null;
let internetCheckInterval = null;

async function checkInternetQuality() {
  try {
    const res = await ping.promise.probe('8.8.8.8', {
      timeout: 10,
      extra: ['-n', '1'],
    });

    const isGoodConnection = res.alive && res.time < 100;
    
    tray.setImage(path.join(__dirname, isGoodConnection ? 'green-circle.png' : 'red-circle.png'));
    tray.setToolTip(`Internet ${isGoodConnection ? 'funcionando correctamente' : 'con problemas'}\nPing: ${res.time}ms`);
  } catch (error) {
    tray.setImage(path.join(__dirname, 'red-circle.png'));
    tray.setToolTip('Sin conexión a internet');
  }
}

app.whenReady().then(() => {
  tray = new Tray(path.join(__dirname, 'green-circle.png'));
  tray.setToolTip('Iniciando monitoreo de internet...');

  checkInternetQuality();
  internetCheckInterval = setInterval(checkInternetQuality, 5000);
});

app.on('window-all-closed', () => {
  if (internetCheckInterval) {
    clearInterval(internetCheckInterval);
  }
  if (process.platform !== 'darwin') {
    app.quit();
  }
}); 