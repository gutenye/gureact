import React from 'react'
import { Input } from 'antd'

// <Input
//   value onChange(value)
class AntdTextArea extends React.Component {
  render() {
    const { onChange, ...rest } = this.props
    if (onChange)
      rest.onChange = e => {
        onChange(e.target.value)
      }
    return <Input.TextArea ref={v => (this.input = v)} {...rest} />
  }

  focus() {
    this.input.focus()
  }
}

export default AntdTextArea
