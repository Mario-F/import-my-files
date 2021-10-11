import { ipcRenderer } from 'electron'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { IConfigTestHomedir } from './shared/config/test'

function render() {
  const configTest: IConfigTestHomedir = ipcRenderer.sendSync('config-test', 'homedir')
  // eslint-disable-next-line no-console
  console.log(configTest)
  ReactDOM.render(<h2>Hello from React!</h2>, document.body)
}

render()
