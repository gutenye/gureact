import React, { Component } from 'react'
import styled from 'styled-components'
import Device from './Device'

class DeviceViewer extends Component {
  render() {
    const {props: {src}} = this
    return (
      <Root>
        <RootInner>
          <Device2 device='laptop' src={src} />
          <Device2 device='tablet' src={src} landscape />
          <Device2 device='phone' src={src} />
        </RootInner>
      </Root>
    )
  }
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const RootInner = styled.div`
  width: 1000px;
  height: 600px;
  margin-left: 32px;

  @media (max-width: 1024px) {
    width: 500px;
    height: 300px;
    margin-left: -64px;
    transform-origin: 0 0;
    transform: scale(0.6);
  }

  @media (max-width: 600px) {
    width: 250px;
    height: 150px;
    margin-left: -80px;
    transform-origin: 0 0;
    transform: scale(0.35);
  }
`

const Device2 = styled(Device)`
  position: absolute;
  transform-origin: left top;

  &.laptop {
    transform: translate3d(0px, 40px, 0) scale(0.5);
  }

  &.tablet {
    transform: translate3d(380px, 130px, 0) scale(0.5);
  }

  &.phone {
    transform: translate3d(800px, 110px, 0) scale(0.5);
  }
`

export default DeviceViewer
