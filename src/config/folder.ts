import { app, ipcMain, dialog, BrowserWindow } from 'electron'
import log from 'electron-log'
import jetpack from 'fs-jetpack'
import { IConfigFolderImport } from '../shared/config/test'

ipcMain.on('config-folder', async (event, arg) => {
  log.verbose(`ipc config-folder called with arg ${arg}`)

  if (arg === 'import') {
    await dialog.showOpenDialog(null)
    event.returnValue = { dir: 'empty' }
  }
})
