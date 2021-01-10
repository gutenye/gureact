'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imagePicker = require('antd-mobile/lib/image-picker');

var _imagePicker2 = _interopRequireDefault(_imagePicker);

var _picker = require('antd-mobile/lib/picker');

var _picker2 = _interopRequireDefault(_picker);

var _datePicker = require('antd-mobile/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _checkbox = require('antd-mobile/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _switch = require('antd-mobile/lib/switch');

var _switch2 = _interopRequireDefault(_switch);

var _textareaItem = require('antd-mobile/lib/textarea-item');

var _textareaItem2 = _interopRequireDefault(_textareaItem);

var _inputItem = require('antd-mobile/lib/input-item');

var _inputItem2 = _interopRequireDefault(_inputItem);

require('antd-mobile/lib/image-picker/style/css');

require('antd-mobile/lib/picker/style/css');

require('antd-mobile/lib/date-picker/style/css');

require('antd-mobile/lib/checkbox/style/css');

require('antd-mobile/lib/switch/style/css');

require('antd-mobile/lib/textarea-item/style/css');

require('antd-mobile/lib/input-item/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Goals:
 */

exports.default = {
  InputItem: _inputItem2.default,
  TextareaItem: _textareaItem2.default,
  Switch: _switch2.default,
  Checkbox: _checkbox2.default,
  DatePicker: _datePicker2.default,
  Picker: _picker2.default,
  ImagePicker: _imagePicker2.default
};