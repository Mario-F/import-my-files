import React from 'react'
import { ipcRenderer } from 'electron'
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'
import { IConfigTestHomedir } from './../shared/config/test'

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
  return (
    <div>
      <div className="Hello"></div>
      <h1>Welcome to Import my Files!</h1>
    </div>
  )
}

export default Main
