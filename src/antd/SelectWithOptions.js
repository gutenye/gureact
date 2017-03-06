import React from './vendor'
import { Select } from 'antd'
import { isPlainObject } from 'lodash'

//
// <SelectWithOptions
//   options = [value], [{name}]
//   field = 'name'*
//   tokenSeparators = [',']
//
class SelectWithOptions extends React.Component {
  static defaultProps = {
    field: 'name',
    tokenSeparators: [','],
  }

  render() {
    var {options, field, ...rest} = this.props
    if (isPlainObject(options[0]))
      options = options.map(v => v[field])
    return (
      <Select {...rest}>
        {options.map(v =>
        <Select.Option key={v} value={v}>{v}</Select.Option>
        )}
      </Select>
    )
  }
}

export default SelectWithOptions
