// @flow
import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

class Device extends React.Component {
  props: {
    /** https://example.com */
    src: string,
    /** phone tablet laptop */
    device: string,
    landscape?: boolean,
    className?: string,
  }

  render() {
    const { className, device, landscape, src } = this.props
    return (
      <Root className={cx(className, device, { landscape })}>
        <Iframe src={src} />
      </Root>
    )
  }
}

const Root = styled.div`
  position: relative;

  &.phone {
    width: 360px;
    height: 600px;
    margin: 60px 0 96px;
  }

  &.phone.landscape {
    width: 600px;
    height: 360px;
    margin: 0;
  }

  &.tablet {
    width: 720px;
    height: 1024px;
    margin: 60px 0 96px;
  }

  &.tablet.landscape {
    width: 1024px;
    height: 720px;
    margin: 0;
  }

  &.laptop {
    width: 1366px;
    height: 800px;
  }

  &.phone:before,
  &.tablet:before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -60px -16px -96px -16px;
    border-radius: 32px;
    background: #666;
  }

  &.phone.landscape:before,
  &.tablet.landscape:before {
    margin: -16px -96px -16px -60px;
  }

  &.phone:after,
  &.tablet:after {
    display: block;
    content: "";
    position: absolute;
    bottom: -76px;
    left: 50%;
    width: 56px;
    height: 56px;
    margin-left: -28px;
    border-radius: 28px;
    background: #fff;
  }

  &.phone.landscape:after,
  &.tablet.landscape:after {
    top: 50%;
    right: -76px;
    bottom: auto;
    left: auto;
    margin-top: -28px;
  }

  &.laptop:before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -24px;
    border-radius: 12px;
    background: #666;
  }

  &.laptop:after {
    display: block;
    content: "";
    position: absolute;
    right: 0;
    bottom: -56px;
    left: -140px;
    height: 56px;
    margin: -24px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    background: #777;
  }
`

const Iframe = styled.iframe`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 0;
`

export default Device
