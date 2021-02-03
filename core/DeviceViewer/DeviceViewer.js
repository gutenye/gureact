// @flow
import React from 'react'
import styled from 'styled-components'
import Device from './Device'

// laptop: 683x400 tablet: 612x360 phone: 180x300
// laptopPos='0px, 40px'
// tabletPos='180px, 230px'
// phonePos='600px, 210px'

class DeviceViewer extends React.Component {
  props: {
    src: string,
    /** '0.6' is 600px width */
    scale: string,
    laptopPos: string,
    tabletPos: string,
    phonePos: string,
  }

  static defaultProps = {
    scale: '1.0',
    laptopPos: '0px, 40px',
    tabletPos: '380px, 130px',
    phonePos: '800px, 110px',
  }

  render() {
    const { src, scale, laptopPos, tabletPos, phonePos } = this.props
    return (
      <RootInner scale={scale}>
        <DeviceStyled device="laptop" pos={laptopPos} src={src} />
        <DeviceStyled device="tablet" landscape pos={tabletPos} src={src} />
        <DeviceStyled device="phone" pos={phonePos} src={src} />
      </RootInner>
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
  transform: scale(${(p) => p.scale});

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

const DeviceStyled = styled(Device)`
  position: absolute;
  transform-origin: left top;

  &.laptop {
    transform: translate3d(${(p) => p.pos}, 0) scale(0.5);
  }

  &.tablet {
    transform: translate3d(${(p) => p.pos}, 0) scale(0.5);
  }

  &.phone {
    transform: translate3d(${(p) => p.pos}, 0) scale(0.5);
  }
`

export default DeviceViewer
