'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = require('react-router-dom');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// prettier-ignore


/**
 * <BottomToolbar
 *  items=[
 *    { label: 'Favourite' }
 *    { label: 'Add to Cart', primary: true, align: 'end' }
 *  ]
 */
var BottomToolbar = function (_React$Component) {
  _inherits(BottomToolbar, _React$Component);

  function BottomToolbar() {
    _classCallCheck(this, BottomToolbar);

    return _possibleConstructorReturn(this, (BottomToolbar.__proto__ || Object.getPrototypeOf(BottomToolbar)).apply(this, arguments));
  }

  _createClass(BottomToolbar, [{
    key: 'render',
    value: function render() {
      var items = this.props.items;

      return _react2.default.createElement(
        Root,
        this.props,
        items.map(function (item, index) {
          var marginLeft = 'initial';
          // first time occurs align: 'end': add margin-left: 'auto'
          if (item.align === 'end' && (0, _lodash.findIndex)(items, { align: 'end' }) === index) marginLeft = 'auto';

          var Cmp = item.to ? ItemWithLink : Item;
          return _react2.default.createElement(
            Cmp,
            {
              key: item.label,
              onClick: item.onClick,
              primary: item.primary,
              to: item.to,
              marginLeft: marginLeft
            },
            item.label
          );
        })
      );
    }
  }]);

  return BottomToolbar;
}(_react2.default.Component);

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'BottomToolbar__Root',
  componentId: 'dzohco-0'
})(['position:fixed;bottom:', ';left:0;right:0;display:flex;height:49px;background-color:white;'], function (p) {
  return p.lift ? '49px' : 0;
});

var ItemStyle = (0, _styledComponents.css)(['display:flex;align-items:center;justify-content:center;height:100%;cursor:pointer;margin-left:', ';padding:0 16px;', '}'], function (p) {
  return p.marginLeft;
}, function (p) {
  return p.primary && '\n        color: ' + p.theme.textPrimaryOnPrimary + ';\n        background: ' + p.theme.primary + ';\n      ';
});

// prettier-ignore
var Item = _styledComponents2.default.div.withConfig({
  displayName: 'BottomToolbar__Item',
  componentId: 'dzohco-1'
})(['', ''], ItemStyle);

var ItemWithLink = (0, _styledComponents2.default)(function (p) {
  return _react2.default.createElement(_reactRouterDom.Link, (0, _lodash.omit)(p, ['primary', 'marginLeft']));
}).withConfig({
  displayName: 'BottomToolbar__ItemWithLink',
  componentId: 'dzohco-2'
})(['', ''], ItemStyle);

BottomToolbar.Root = Root;

exports.default = BottomToolbar;