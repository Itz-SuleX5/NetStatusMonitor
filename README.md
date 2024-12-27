# NetStatusMonitor

A lightweight system tray application that monitors your internet connection quality in real-time.

## Features

- Real-time internet connection monitoring
- Visual status indicator in the system tray (green/red)
- Ping time display on hover
- Minimal resource usage
- No GUI, runs silently in the background

## How it Works

The application performs a ping test to Google's DNS (8.8.8.8) every 5 seconds and:
- Shows a green icon when ping is under 100ms
- Shows a red icon when ping is over 100ms or when there's no connection
- Displays current ping time when hovering over the icon

## Installation

1. Download the latest release
2. Extract the files
3. Make sure both `green-circle.png` and `red-circle.png` are in the same directory as the executable
4. Run `electron-tray-icon 1.0.0.exe`

## Autostart with Windows (Recommended)

To make NetStatusMonitor start automatically with Windows:

1. Press `Win + R`
2. Type `shell:startup`
3. Create a shortcut to the `electron-tray-icon 1.0.0.exe` in this folder

## Development

If you want to run this from source:

1. Clone this repository
2. Install dependencies:
```bash
npm install
```
3. Run the application:
```bash
npm start
```
4. Build executable:
```bash
npm run build
```

## Requirements

- Windows OS
- Internet connection for monitoring

## License

MIT

## Author

Itz-SuleX5 