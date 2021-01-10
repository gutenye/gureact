'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputNumber = require('antd/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _autoComplete = require('antd/lib/auto-complete');

var _autoComplete2 = _interopRequireDefault(_autoComplete);

require('antd/lib/input-number/style/css');

require('antd/lib/auto-complete/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _TreeSelect = require('../TreeSelect/TreeSelect');

var _TreeSelect2 = _interopRequireDefault(_TreeSelect);

var _Input = require('../Input/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Select = require('../Select/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Textarea = require('../Textarea/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _InputTree = require('../InputTree/InputTree');

var _InputTree2 = _interopRequireDefault(_InputTree);

var _Tags = require('../Tags/Tags');

var _Tags2 = _interopRequireDefault(_Tags);

var _ImageUpload = require('../ImageUpload/ImageUpload');

var _ImageUpload2 = _interopRequireDefault(_ImageUpload);

var _Radio = require('../Radio/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
exports.default = {
  Input: (0, _utils.stringQuerier)(_Input2.default),
  Textarea: (0, _utils.stringQuerier)(_Textarea2.default),
  Tags: (0, _utils.arrayQuerier)(_Tags2.default),
  AutoComplete: (0, _utils.stringQuerier)(_autoComplete2.default),
  InputNumber: (0, _utils.numberQuerier)(_inputNumber2.default),
  TreeSelect: (0, _utils.stringQuerier)(_TreeSelect2.default),
  Select: (0, _utils.stringQuerier)(_Select2.default),
  InputTree: (0, _utils.stringQuerier)(_InputTree2.default),
  ImageUpload: (0, _utils.stringQuerier)(_ImageUpload2.default),
  Radio: (0, _utils.stringQuerier)(_Radio2.default)
};