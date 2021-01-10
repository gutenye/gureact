'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Statusbar = require('./Statusbar/Statusbar');

var _Statusbar2 = _interopRequireDefault(_Statusbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArtboardMobile = function ArtboardMobile(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    Root,
    null,
    _react2.default.createElement(_Statusbar2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'ArtboardMobile-children' },
      children
    )
  );
};

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'ArtboardMobile__Root',
  componentId: 'sc-1fhuqh7-0'
})(['width:375px;background-color:white;display:flex;flex-direction:column;overflow-y:scroll;box-shadow:0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);.ArtboardMobile-children{flex:1;height:647px;position:relative;}']);

ArtboardMobile.Root = Root;

exports.default = ArtboardMobile;