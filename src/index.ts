import { app, BrowserWindow } from 'electron'
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'
import log from 'electron-log'
import jetpack from 'fs-jetpack'
import path from 'path'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const MAIN_WINDOW_WEBPACK_ENTRY: any

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-line global-require
if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = async (): Promise<void> => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 700,
    width: 1200,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  // Install react dev tools
  const installResult = await installExtension(REACT_DEVELOPER_TOOLS)
  log.verbose(`Extension ${installResult} installed`)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Test pdf loading
  /* const pdf = new BrowserWindow({
    height: 700,
    width: 1200,
    webPreferences: {
      plugins: true,
    },
  })
  const pdfFile = path.resolve(path.join(__dirname, '../..', '/examples/lorem.pdf'))
  log.debug(pdfFile)
  log.debug(jetpack.exists(pdfFile))
  pdf.loadURL(`file://${pdfFile}`)
  pdf.webContents.openDevTools()*/
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
import './main/information'
import './main/config/test'
import './main/config/folder'
