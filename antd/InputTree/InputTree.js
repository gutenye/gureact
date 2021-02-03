import React from 'react'
import Input from '../Input/Input'
import TreeSelect from '../TreeSelect/TreeSelect'

// <InputTree value onChange options
class AntdInputTree extends React.Component {
  render() {
    const { value, onChange, options, defaultValue, placeholder } = this.props
    return (
      <div>
        <Input
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
        <TreeSelect
          value={value}
          onChange={this.treeOnChange}
          options={options}
        />
      </div>
    )
  }

  treeOnChange = (value) => {
    this.props.onChange(value)
  }
}

export default AntdInputTree
