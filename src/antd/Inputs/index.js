import React from '../vendor'
import { AutoComplete, InputNumber } from 'antd'
import { addUpdateViaRecord, stringQuerier, numberQuerier, arrayQuerier } from './utils'
import TreeSelect from './TreeSelect'
import Input from './Input'
import Select from './Select'
import Textarea from './Textarea'
import InputTree from './InputTree'
import Tags from './Tags'
import ImageUpload from './ImageUpload'

/*
Goals
  - easy to use, provide default options, ...
  - onChange(value)
  - onSearch(value)

<Select options>
<TreeSelect options>

can not use recompose, hoc makes form.getFieldDecorator()(<Input />) not working.
*/

export {
  Input,
  Textarea,
  Select,
  TreeSelect,
  InputTree,
  Tags,
  ImageUpload
}

// - add onSearch
// - trim white space
// - serialize and deserialize to url query
export const INPUTS = {
  'Input': stringQuerier(Input),
  'Textarea': stringQuerier(Textarea),
  'Tags': arrayQuerier(Tags),
  'AutoComplete': stringQuerier(AutoComplete),
  'InputNumber': numberQuerier(InputNumber),
  'TreeSelect': stringQuerier(TreeSelect),
  'Select': stringQuerier(Select),
  'InputTree': stringQuerier(InputTree),
  'ImageUpload': stringQuerier(ImageUpload),
}

export const SetInputNumber = addUpdateViaRecord(InputNumber)
