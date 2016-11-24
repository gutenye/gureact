import React, { Component } from 'react'
import injectStyles from 'react-jss'
import cx from 'classnames'

/*
 * <Device
 *    src='https://www.example.com'
 *    device='phone' tablet laptop
 *    landscape
 */
class Device extends Component {
  render() {
    const {props: {className, device, landscape, src, sheet: {classes:s}}} = this
    pd(landscape, cx(landscape))
    return (
      <div className={cx(s.Device, device, {landscape}, className)}>
        <iframe className={s.iframe} src={src} />
      </div>
    )
  }
}

const styles = {
  Device: {
    '&.phone': {
      width: 360,
      height: 600,
      margin: '60px 0 96px',
    },

    '&.phone.landscape': {
      width: 600,
      height: 360,
      margin: 0,
    },

    '&.tablet': {
      width: 720,
      height: 1024,
      margin: '60px 0 96px',
    },

    '&.tablet.landscape': {
      width: 1024,
      height: 720,
      margin: 0,
    },

    '&.laptop': {
      width: 1366,
      height: 800,
    },

    '&.phone:before, &.tablet:before': {
      display: 'block',
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      margin: '-60px -16px -96px -16px',
      'border-radius': 32,
      background: '#666',
    },

    '&.phone.landscape:before, &.tablet.landscape:before': {
      margin: '-16px -96px -16px -60px',
    },

    '&.phone:after, &.tablet:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      bottom: '-76px',
      left: '50%',
      width: '56px',
      height: '56px',
      'margin-left': '-28px',
      'border-radius': '28px',
      background: '#fff',
    },

    '&.phone.landscape):after, &.tablet.landscape:after': {
      top: '50%',
      right: '-76px',
      bottom: 'auto',
      left: 'auto',
      'margin-top': '-28px',
    },

    '&.laptop:before': {
      display: 'block',
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      margin: '-24px',
      'border-radius': '12px',
      background: '#666',
    },

    '&.laptop:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      right: 0,
      bottom: '-56px',
      left: '-140px',
      height: '56px',
      margin: '-24px',
      'border-bottom-right-radius': '12px',
      'border-bottom-left-radius': '12px',
      background: '#777',
    },
  },

  iframe: {
    position: 'relative',
    width: '100%',
    height: '100%',
    'background-color': '#fff',
    border: '0',
  },
}

Device = injectStyles(styles)(Device)

export default Device
