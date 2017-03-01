import { React } from './vendor'
import { Select } from 'antd'
import { isPlainObject } from 'lodash'

//
// <SelectWithOptions
//   options = [value], [{name}]
//   key = 'name'*
//   tokenSeparators = [',']
//
class SelectWithOptions extends React.Component {
  static defaultProps = {
    key: 'name',
    tokenSeparators: [','],
  }

  render() {
    var {options, key, ...rest} = this.props
    if (isPlainObject(options[0]))
      options = options.map(v => v[key])
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
