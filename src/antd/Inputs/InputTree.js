import React from '../vendor'
import { Input, TreeSelect } from 'gureact/antd'

// <InputTree value onChange options
class InputTree extends React.Component {
  render() {
    const {value, onChange, options, defaultValue, placeholder } = this.props
    return (
      <div>
        <Input value={value} onChange={onChange} defaultValue={defaultValue} placeholder={placeholder} />
        <TreeSelect value={value} onChange={this.treeOnChange} options={options} />
      </div>
    )
  }

  treeOnChange = (value) => {
    this.props.onChange(value)
  }
}

export default InputTree
