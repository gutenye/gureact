import React from 'react'
import { Input } from 'antd'

export default class GuInput extends React.Component {
  render() {
    const {onChange, onSearch, ...rest} = this.props
    if (onChange)
      rest.onChange = (e) => {
        onChange(e.target.value)
      }
    if (onSearch)
      rest.onPressEnter = (e) => {
        onSearch(e.target.value)
      }
    return <Input {...rest} />
  }
}
