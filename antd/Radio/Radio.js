import React from 'react'
import { isPlainObject, isFunction } from 'lodash'
import { Radio } from 'antd'

// <Radio
//   options = [value], [{FIELD: value}], fn
//   field = 'name'*
//   onSearch
//
class AntdRadio extends React.Component {
  static defaultProps = {
    options: [],
    field: 'name',
  }

  render() {
    var { options, field, onChange, onSearch, ...rest } = this.props
    if (isFunction(options)) {
      options = options()
    }
    if (isPlainObject(options[0])) {
      options = options.map((v) => v[field])
    }
    return (
      <Radio.Group onChange={this.onChange} {...rest}>
        {options.map((v) => (
          <Radio.Button key={v} value={v}>
            {v}
          </Radio.Button>
        ))}
      </Radio.Group>
    )
  }

  onChange = (value) => {
    this.props.onChange(value)
    if (this.props.onSearch) this.props.onSearch(value)
  }
}

export default AntdRadio
