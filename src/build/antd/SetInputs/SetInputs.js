'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputNumber = require('antd/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

require('antd/lib/input-number/style/css');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  InputNumber: (0, _utils.addUpdateViaRecord)(_inputNumber2.default)
};