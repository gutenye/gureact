'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _wifi = require('react-icons/lib/md/wifi');

var _wifi2 = _interopRequireDefault(_wifi);

var _bluetooth = require('react-icons/lib/md/bluetooth');

var _bluetooth2 = _interopRequireDefault(_bluetooth);

var _signal = require('./signal.svg');

var _signal2 = _interopRequireDefault(_signal);

var _battery = require('./battery.svg');

var _battery2 = _interopRequireDefault(_battery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Statusbar = function Statusbar() {
  return _react2.default.createElement(
    Root,
    null,
    _react2.default.createElement(_signal2.default, { className: 'signal' }),
    _react2.default.createElement(
      'span',
      null,
      'Carrier'
    ),
    _react2.default.createElement(_wifi2.default, { className: 'wifi' }),
    _react2.default.createElement(
      'span',
      { className: 'center' },
      '11:14 AM'
    ),
    _react2.default.createElement(_bluetooth2.default, { className: 'bluetooth' }),
    _react2.default.createElement(
      'span',
      null,
      '100%'
    ),
    _react2.default.createElement(_battery2.default, { className: 'battery' })
  );
};

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'Statusbar__Root',
  componentId: 'lgrt8r-0'
})(['height:20px;display:flex;align-items:center;font-size:12px;background-color:white;> *{margin-right:4px;&:first-child{margin-left:4px;}}.signal{width:33.5px;height:5.5px;}.wifi{width:14px;height:14px;}.bluetooth{opacity:0.4;width:16px;height:16px;}.center{flex:1;display:flex;justify-content:center;font-weight:500;}.battery{width:24.5px;height:24.5px;}']);

exports.default = Statusbar;