'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

require('antd/lib/input/style/css');

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AntdTextarea = (0, _recompose.compose)((0, _recompose.defaultProps)({
  type: 'textarea'
}))(_input2.default);

exports.default = AntdTextarea;