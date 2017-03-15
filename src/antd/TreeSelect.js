import React, { compose, withProps } from 'gureact/antd/vendor'
import { TreeSelect } from 'antd'

/* support simple data: [
    { name: 'China', children: [
      { name: 'Zhejiang', children: [{name: 'Yiwu'}, {name: 'Hangzhou'}] },
      { name: 'Shanghai' },

  complex data: [
    { label: 'China', value: 'China', key: 'China', children: [
      { label: 'Zhejiang', value: 'China.Zhejiang', key: 'China.Zhejiang'
*/

export default compose(
  withProps((props) => ({treeData: simple2complex(props.treeData)}))
)(TreeSelect)

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
