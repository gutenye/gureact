'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash');

var _Artboard = require('./Artboard');

var _Artboard2 = _interopRequireDefault(_Artboard);

var _ArtboardDefault = require('./ArtboardDefault');

var _ArtboardDefault2 = _interopRequireDefault(_ArtboardDefault);

var _ArtboardMobile = require('./ArtboardMobile');

var _ArtboardMobile2 = _interopRequireDefault(_ArtboardMobile);

var _Color = require('./Color');

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <Guide>
 *   <Guide.Artboard
 *     title="Basic"
 *     type="mobile"   iphone iphonePlus
 */
var Guide = function Guide(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    Root,
    null,
    (0, _lodash.castArray)(children).map(function (item, i) {
      return _react2.default.createElement(
        'div',
        { key: i, className: 'Guide-item' },
        item
      );
    })
  );
};

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'Guide__Root',
  componentId: 'v4tkoa-0'
})(['display:flex;flex-wrap:wrap;.Guide-item{margin:16px;}']);

Guide.Artboard = _Artboard2.default;
Guide.ArtboardMobile = _ArtboardMobile2.default;
Guide.ArtboardDefault = _ArtboardDefault2.default;
Guide.Color = _Color2.default;

exports.default = Guide;