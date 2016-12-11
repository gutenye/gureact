import React, { Component } from 'react'

/**
 * <Icon src={require('./home.svg')} />
 **/
class Icon extends Component {
  render() {
    const {props: {src}} = this
    return (
      <svg className='icon'>
        <use xlinkHref={src} />
      </svg>
    )
  }
}

export default Icon
