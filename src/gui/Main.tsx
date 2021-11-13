import React from 'react'
import { ipcRenderer } from 'electron'
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'
import { IInformation } from './../shared/information'
import { IConfigTestHomedir } from './../shared/config/test'
import { IConfigFolderImport } from './../shared/config/folder'

const Main = (): JSX.Element => {
  const configTest: IConfigTestHomedir = ipcRenderer.sendSync('config-test', 'homedir')
  // eslint-disable-next-line no-console
  console.log(configTest)

  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  )
}

const Hello = () => {
  const info: IInformation = ipcRenderer.sendSync('information')

  return (
    <div>
      <div className="Hello"></div>
      <h1>Welcome to Import my Files! {info.appVersion}</h1>
      <button onClick={getImportFolder}>Import Directory</button>
    </div>
  )
}

const getImportFolder = () => {
  const configFolderImport: IConfigFolderImport = ipcRenderer.sendSync('config-folder', 'import')
  // eslint-disable-next-line no-console
  console.log(configFolderImport)
}

export default Main
