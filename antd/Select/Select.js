import React from 'react'
import { isPlainObject, isFunction } from 'lodash'
import { Select } from 'antd'

//
// <Select
//   options = [value], [{FIELD: value}], fn
//   field = 'name'*
//   onSearch
//
class AntdSelect extends React.Component {
  static defaultProps = {
    options: [],
    field: 'name',
    tokenSeparators: [','],
  }

  render() {
    var { options, field, onChange, onSearch, value, ...rest } = this.props
    // Fix placeholder is showed when value is undefined, not ''
    // react-final-form, set initialValue to undefined, but value becomes ''.
    value = value === '' ? undefined : value
    if (isFunction(options)) {
      options = options()
    }
    if (isPlainObject(options[0])) {
      options = options.map(v => v[field])
    }
    return (
      <Select value={value} onChange={this.onChange} {...rest}>
        {options.map(v => (
          <Select.Option key={v} value={v}>
            {v}
          </Select.Option>
        ))}
      </Select>
    )
  }

  onChange = value => {
    this.props.onChange(value)
    if (this.props.onSearch) this.props.onSearch(value)
  }
}

export default AntdSelect
