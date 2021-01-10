'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ArtboardDefault = function ArtboardDefault(_ref) {
  var title = _ref.title,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['title', 'children']);

  return _react2.default.createElement(
    Root,
    rest,
    _react2.default.createElement(
      'h3',
      { className: 'Styleguide-header' },
      title
    ),
    _react2.default.createElement(
      'div',
      null,
      (0, _lodash.castArray)(children).map(function (v, i) {
        return _react2.default.createElement(
          'div',
          { key: i, className: 'Styleguide-item' },
          v
        );
      })
    )
  );
};

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'ArtboardDefault__Root',
  componentId: 'sc-17cextk-0'
})(['margin:0 40px 40px 0;width:395px;padding:0 10px 10px 10px;background-color:', ';.Styleguide-header{margin-bottom:10px;&::before{display:block;content:\'\';width:30%;border-top:4px solid ', ';margin-bottom:3px;}}.Styleguide-item{margin-top:10px;}'], function (p) {
  return p.type ? 'white' : 'transparent';
}, function (p) {
  return p.theme.primary;
});

exports.default = ArtboardDefault;