'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArtboardMobile = require('./ArtboardMobile');

var _ArtboardMobile2 = _interopRequireDefault(_ArtboardMobile);

var _ArtboardDefault = require('./ArtboardDefault');

var _ArtboardDefault2 = _interopRequireDefault(_ArtboardDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Artboard = function Artboard(props) {
  if (props.type === 'mobile') return _react2.default.createElement(_ArtboardMobile2.default, props);else return _react2.default.createElement(_ArtboardDefault2.default, props);
};

exports.default = Artboard;