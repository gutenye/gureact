'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Color = function Color(_ref) {
  var code = _ref.code,
      label = _ref.label;
  return _react2.default.createElement(
    ColorRoot,
    null,
    _react2.default.createElement('div', { className: 'color ' + code }),
    _react2.default.createElement(
      'div',
      null,
      label
    )
  );
};

var ColorRoot = _styledComponents2.default.div.withConfig({
  displayName: 'Color__ColorRoot',
  componentId: 'sc-1blqfsf-0'
})(['display:flex;align-items:center;margin-bottom:50px;.color{width:50px;height:50px;margin-right:20px;}.primary{background-color:', ';}.secondary{background-color:', ';}'], function (p) {
  return p.theme.primary;
}, function (p) {
  return p.theme.secondary;
});

exports.default = Color;