import React from 'react'
import { Input } from 'antd'

// <Input
//   value onChange(value)
//   ---
//   onSearch onPressEnter
class AntdInput extends React.Component {
  static defaultProps = {
    onSearch() {},
    onPressEnter() {},
  }

  render() {
    const { onChange, onSearch, onPressEnter, ...rest } = this.props
    if (onChange)
      rest.onChange = e => {
        onChange(e.target.value)
      }
    rest.onPressEnter = e => {
      onSearch(e.target.value)
      onPressEnter(e.target.value)
    }
    return <Input ref={v => (this.input = v)} {...rest} />
  }

  focus() {
    this.input.focus()
  }
}

export default AntdInput
