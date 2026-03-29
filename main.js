const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    frame: false,
    fullscreen: true,
    autoHideMenuBar: true,
    backgroundColor: '#0a0a0f',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('index.html')

  ipcMain.on('minimize-app', () => {
    win.minimize();
  })

  ipcMain.on('close-app', () => {
    app.quit();
  })
}

app.whenReady().then(() => {
  createWindow()

  // Make the app launch automatically when Windows boots up
  app.setLoginItemSettings({
    openAtLogin: true,
    openAsHidden: false, // Start normally
    path: app.getPath('exe') // Use the built executable
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})