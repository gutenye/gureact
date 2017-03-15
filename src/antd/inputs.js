import React from './vendor'
import { compact } from 'lodash'
import { AutoComplete, InputNumber, TreeSelect } from 'antd'
import Input from './Input'
import SelectWithOptions from './SelectWithOptions'

// - add onSearch
// - trim white space
// - serialize and deserialize to url query

function stringQuerier(obj) {
  obj.parseQuery = (str) => str
  obj.toQuery = (str) => str
  obj.trim = (str) => str.trim()
  return obj
}

function arrayQuerier(obj) {
  obj.parseQuery = (str) => compact(str.split(','))
  obj.toQuery = (ary) => ary.join(',')
  obj.trim = (ary) => ary.map(v => v.trim())
  return obj
}

function numberQuerier(obj) {
  obj.parseQuery = (str) => parseInt(str, 10)
  obj.toQuery = (num) => num
  obj.trim = (num) => num
  return obj
}

const INPUTS = {
  'Input': stringQuerier(Input),
  'Tags': arrayQuerier((props) => <SelectWithOptions tags {...props} />),
  'AutoComplete': stringQuerier(AutoComplete),
  'InputNumber': numberQuerier(InputNumber),
  'TreeSelect': stringQuerier(TreeSelect),
}

export default INPUTS
