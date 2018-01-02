import React from 'react'
import { AutoComplete, InputNumber } from 'antd'
import { stringQuerier, numberQuerier, arrayQuerier } from './utils'
import TreeSelect from '../TreeSelect/TreeSelect'
import Input from '../Input/Input'
import Select from '../Select/Select'
import Textarea from '../Textarea/Textarea'
import InputTree from '../InputTree/InputTree'
import Tags from '../Tags/Tags'
import ImageUpload from '../ImageUpload/ImageUpload'

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
export default {
  Input: stringQuerier(Input),
  Textarea: stringQuerier(Textarea),
  Tags: arrayQuerier(Tags),
  AutoComplete: stringQuerier(AutoComplete),
  InputNumber: numberQuerier(InputNumber),
  TreeSelect: stringQuerier(TreeSelect),
  Select: stringQuerier(Select),
  InputTree: stringQuerier(InputTree),
  ImageUpload: stringQuerier(ImageUpload),
}
