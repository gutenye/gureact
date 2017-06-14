import React from 'react'

class DesignImage extends React.Component {
  props: {
    size: number,
  }

  static defaultProps = {
    size: 100,
  }

  render() {
    const { size } = this.props
    const src = `//placeholder.cn/${size}`
    return <img src={src} />
  }
}

export default DesignImage
