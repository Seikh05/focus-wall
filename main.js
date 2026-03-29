const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    frame: false,          // no title bar = wallpaper feel
    fullscreen: false,     // set true if you want fullscreen on launch
    backgroundColor: '#0a0a0f',
    webPreferences: {
      nodeIntegration: false
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})