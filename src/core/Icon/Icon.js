// @flow
import React from 'react'

/**
 * <Icon src={require('./home.svg')} />
 **/
class Icon extends React.Component {
  props: {
    src: string,
  }

  render() {
    const { src } = this.props
    return (
      <svg className="icon">
        <use xlinkHref={src} />
      </svg>
    )
  }
}

export default Icon
