import { app, ipcMain } from 'electron'
import log from 'electron-log'
import { IInformation } from '../shared/information'

ipcMain.on('information', (event, arg) => {
  log.verbose(`ipc information called with arg ${arg}`)

  const infoRes: IInformation = {
    appVersion: app.getVersion(),
  }

  event.returnValue = infoRes
})
