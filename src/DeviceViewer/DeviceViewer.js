import React, { Component } from 'react'
import styled from 'styled-components'
import Device from './Device'

// scale='0.6' is 600px width
// laptop: 683x400 tablet: 612x360 phone: 180x300
// laptopPos='0px, 40px'
// tabletPos='180px, 230px'
// phonePos='600px, 210px'

class DeviceViewer extends Component {
  static defaultProps = {
    scale: '1.0',
    laptopPos: '0px, 40px',
    tabletPos: '380px, 130px',
    phonePos: '800px, 110px',
  }

  render() {
    const {src, scale, laptopPos, tabletPos, phonePos} = this.props
    return (
      <Root>
        <RootInner scale={scale}>
          <Device2 device='laptop' src={src} pos={laptopPos} />
          <Device2 device='tablet' landscape pos={tabletPos} src={src} />
          <Device2 device='phone' pos={phonePos} src={src} />
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
  transform: scale(${p => p.scale});

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
    transform: translate3d(${p => p.pos}, 0) scale(0.5);
  }

  &.tablet {
    transform: translate3d(${p => p.pos}, 0) scale(0.5);
  }

  &.phone {
    transform: translate3d(${p => p.pos}, 0) scale(0.5);
  }
`

export default DeviceViewer
