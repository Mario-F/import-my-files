import { app, ipcMain } from 'electron'
import log from 'electron-log'
import jetpack from 'fs-jetpack'
import { IConfigTestHomedir } from '../../shared/config/test'

ipcMain.on('config-test', (event, arg) => {
  log.verbose(`ipc config-test called with arg ${arg}`)

  if (arg === 'homedir') {
    const homedirFiles: IConfigTestHomedir = { files: jetpack.list(app.getPath('home')) }
    log.verbose(`found ${homedirFiles.files.length} files in homedir`)
    event.returnValue = homedirFiles
  }
})
