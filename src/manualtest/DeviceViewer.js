import React from 'react'
import { DeviceViewer } from '../src'

export default class MyDeviceViewer extends React.Component {
  render() {
    return (
      <DeviceViewer
        src="http://www.pingwest.com/"
        tabletPos="180px, 230px"
        phonePos="600px, 210px"
        scale="0.6"
      />
    )
  }
}
