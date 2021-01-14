import React from 'react'
import { map, isPlainObject } from 'lodash'
import { TreeSelect } from 'antd'

/*
  options: {China: {Zhejiang: {Yiwu: 1, Hangzhou: 1}, Shanghai: 1}}
  onSearch(value)
  treeNodeLabelProp: 'value',
  showSearch: true,
  allowClear: true,
  treeDefaultExpandAll: true,
*/
class AntdTreeSelect extends React.Component {
  static defaultProps = {
    treeNodeLabelProp: 'value',
    showSearch: true,
    allowClear: true,
    treeDefaultExpandAll: true,
  }

  render() {
    const { options, onChange, onSearch, ...rest } = this.props
    rest.treeData = simple2complex(options)
    rest.onChange = (value, label, extra) => {
      onChange(value, label, extra)
      if (onSearch) onSearch(value)
    }
    return <TreeSelect {...rest} />
  }
}

/*
  {China: {Zhejiang: {Yiwu: 1, Hangzhou: 1}, Shanghai: 1}}
  ->
  [
    { label: 'China', value: 'China', key: 'China', children: [
      { label: 'Zhejiang', value: 'China.Zhejiang', key: 'China.Zhejiang'
*/
export function simple2complex(data) {
  return mapChildren(data, '')
}

// I'm recursive
function mapChildren(a, parent) {
  if (!isPlainObject(a)) throw new Error('tree data is not a plain object')
  return map(a, (v, k) => {
    const value = `${parent}${k}`
    if (v === 1) return { label: k, value, key: value }
    else
      return {
        label: k,
        value,
        key: value,
        children: mapChildren(v, `${value}.`),
      }
  })
}

export default AntdTreeSelect
