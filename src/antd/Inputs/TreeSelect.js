import React from 'react'
import { TreeSelect } from 'antd'

/*
  onSearch(value)
  treeNodeLabelProp: 'value',
  showSearch: true,
  allowClear: true,
  treeDefaultExpandAll: true,

  support simple data: [
    { name: 'China', children: [
      { name: 'Zhejiang', children: [{name: 'Yiwu'}, {name: 'Hangzhou'}] },
      { name: 'Shanghai' },
*/
export default class GuTreeSelect extends React.Component {
  static defaultProps = {
    treeNodeLabelProp: 'value',
    showSearch: true,
    allowClear: true,
    treeDefaultExpandAll: true,
  }

  render() {
    const {options, onChange, onSearch, ...rest} = this.props
    rest.treeData = simple2complex(options)
    rest.onChange = (value, label, extra) => {
      onChange(value, label, extra)
      if (onSearch)
        onSearch(value)
    }
    return <TreeSelect {...rest} />
  }
}

/*
  complex data: [
    { label: 'China', value: 'China', key: 'China', children: [
      { label: 'Zhejiang', value: 'China.Zhejiang', key: 'China.Zhejiang'
*/
export function simple2complex(data) {
  return mapChildren(data, null)
}

// I'm recursive
function mapChildren(children, parent) {
  return children.map(v => {
    const value = parent ? `${parent.value}.${v.name}` : v.name
    const ret = {label: v.name, value, key: value }
    if (v.children)
      ret.children = mapChildren(v.children, ret)
    return ret
  })
}
