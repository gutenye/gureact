import React from '../vendor'
import { AutoComplete, InputNumber } from 'antd'
import { addUpdateViaRecord, stringQuerier, numberQuerier, arrayQuerier } from './utils'
import TreeSelect from './TreeSelect'
import Input from './Input'
import Select from './Select'
import Textarea from './Textarea'

/*
Goals
  - easy to use, provide default options, ...
  - onChange(value)
  - onSearch(value)

<Select options>
<TreeSelect options>

can not use recompose, hoc makes form.getFieldDecorator()(<Input />) not working.
*/

// - add onSearch
// - trim white space
// - serialize and deserialize to url query
export const INPUTS = {
  'Input': stringQuerier(Input),
  'Textarea': stringQuerier(Textarea),
  'Tags': arrayQuerier((props) => <Select tags {...props} />),
  'AutoComplete': stringQuerier(AutoComplete),
  'InputNumber': numberQuerier(InputNumber),
  'TreeSelect': stringQuerier(TreeSelect),
}

export {
  Input,
  Textarea,
  Select,
  TreeSelect,
}

export const SetInputNumber = addUpdateViaRecord(InputNumber)
