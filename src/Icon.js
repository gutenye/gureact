import React, { Component } from 'react'

/**
 * import IconHome from './home.svg'
 *
 * <Icon href={IconHome} />
 **/
class Icon extends Component {
  render() {
    const {props: {href}} = this
    return (
      <svg className='icon'>
        <use xlinkHref={href} />
      </svg>
    )
  }
}

export default Icon
