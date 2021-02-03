import React from 'react'
import { render } from 'react-dom'
import { Layout, DeviceViewer } from './src'
global.pd = console.log.bind(console)

const pages = [<DeviceViewer src="http://baidu.com/" key="device-viewer" />]

const App = (props) => {
  return <div>{pages.map((v) => v)}</div>
}

render(<App />, document.querySelector('#app'))
