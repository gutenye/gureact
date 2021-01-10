'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.pd = console.log.bind(console);
//import Frame from 'react-frame-component'

window.log = console.log.bind(console);

window.DemoMobile = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'demo-canvas',
    null,
    _react2.default.createElement(
      'demo-artboard',
      null,
      children
    )
  );
};

window.DemoParagraphs = function (_ref2) {
  var count = _ref2.count;
  return _react2.default.createElement(
    'div',
    null,
    (0, _lodash.times)(count).map(function (v) {
      return _react2.default.createElement(
        'p',
        { key: v },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      );
    })
  );
};

// eslint-disable-next-line
DemoParagraphs.defaultProps = {
  count: 1
};

window.DemoFrame = function (_ref3) {
  var fullWidth = _ref3.fullWidth,
      children = _ref3.children;
  return _react2.default.createElement(
    Frame,
    { style: { width: fullWidth ? '100%' : 320 } },
    _react2.default.createElement('link', {
      href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      rel: 'stylesheet'
    }),
    _react2.default.createElement('link', {
      href: 'https://cdn.jsdelivr.net/npm/material-components-web@0.15/dist/material-components-web.min.css',
      rel: 'stylesheet'
    }),
    _react2.default.createElement(
      'style',
      null,
      '\n    body { margin: 0; } \n    p { padding: 16px; margin: 0; }\n      '
    ),
    _react2.default.createElement(
      'div',
      null,
      children
    )
  );
};