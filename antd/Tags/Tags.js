import React from 'react'
import Select from '../Select/Select'

class AntdTags extends React.Component {
  render() {
    return <Select tags {...this.props} />
  }
}

export default AntdTags