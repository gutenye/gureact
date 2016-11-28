import React, { Component } from 'react'
import Device from './Device'
import { StyleSheet, css } from 'aphrodisiac'
import cx from 'classnames'

class DeviceViewer extends Component {
  render() {
    const {props: {src}} = this
    return (
      <div className={css(s.DeviceViewer)}>
        <div className={css(s.views)}>
          <div className={cx(css(s.view), 'laptop')}><Device device='laptop' src={src} /></div>
          <Device className={s.view} device='tablet' src={src} landscape />
          <Device className={s.view} device='phone' src={src} />
        </div>
      </div>
    )
  }
}

const s = StyleSheet.create({
  DeviceViewer: {
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  },

  views: {
    width: 1000,
    height: 600,
    'margin-left': 32,

    '@media (max-width: 1024px)': {
      views: {
        width: 500,
        height: 300,
        'margin-left': '-64px',
        'transform-origin': '0 0',
        transform: 'scale(0.6)',
      },
    },

    '@media (max-width: 600px)': {
      views: {
        width: 250,
        height: 150,
        'margin-left': '-80px',
        'transform-origin': '0 0',
        transform: 'scale(0.35)',
      },
    },
  },

  view: {
    position: 'absolute',
    'transform-origin': 'left top',

    '&.laptop': {
      transform: 'translate3d(0px, 40px, 0) scale(0.5)',
    },

    '&.tablet': {
      transform: 'translate3d(380px, 130px, 0) scale(0.5)',
    },

    '&.phone': {
      'transform': 'translate3d(800px, 110px, 0) scale(0.5)',
    }
  },
})

export default DeviceViewer