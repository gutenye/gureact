import React from 'react'
import { Input as Input_ } from 'antd'

// <Input onChange(value) onSearch(value) />
class Input extends React.Component {
  render() {
    const { onChange, onSearch, ...rest} = this.props
    if (onChange)
      rest.onChange = this.onChange
    if (onSearch)
      rest.onPressEnter = this.onSearch
    return (
      <Input_ {...rest} />
    )
  }

  onChange = (e) => {
    this.props.onChange(e.target.value, e)
  }

  onSearch = (e) => {
    this.props.onSearch(e.target.value, e)
  }
}

export default Input
