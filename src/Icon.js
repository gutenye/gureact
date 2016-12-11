import React, { Component } from 'react'

/**
 * import IconHome from './home.svg'
 *
 * <Icon src={IconHome} />
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
