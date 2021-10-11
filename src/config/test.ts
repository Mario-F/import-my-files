import { app, ipcMain } from 'electron'
import jetpack from 'fs-jetpack'
import { IConfigTestHomedir } from 'src/shared/config/test'

ipcMain.on('config-test', (event, arg) => {
  if (arg === 'homedir') {
    const homedirFiles = jetpack.list(app.getPath('home'))
    event.returnValue = <IConfigTestHomedir>homedirFiles
  }
})
