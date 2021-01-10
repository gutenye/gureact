'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _lodash = require('lodash');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Drawer = require('./Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Content = require('./Content');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <Layout
//   STYLE: inner
//   header = {
//     actions: [{title, to, primary}]
//   drawer = {
//     appName,
//     menu: [{title, icon, children: [{title, to}]}]
//
// body { background-color: rgb(235, 238, 240); }
//

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      drawerIsOpen: false
    }, _this.openDrawer = function () {
      _this.setState({ drawerIsOpen: true });
    }, _this.closeDrawer = function () {
      _this.setState({ drawerIsOpen: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          drawer = _props.drawer,
          header = _props.header,
          inner = _props.inner;
      var drawerIsOpen = this.state.drawerIsOpen;

      return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: function theme(v) {
            return (0, _lodash.merge)(DEFAULT_THEME, v);
          } },
        _react2.default.createElement(
          Root,
          null,
          _react2.default.createElement(_Drawer2.default, _extends({
            isOpen: drawerIsOpen,
            closeDrawer: this.closeDrawer
          }, drawer)),
          _react2.default.createElement(
            DrawerRight,
            null,
            _react2.default.createElement(_Header2.default, { openDrawer: this.openDrawer, header: header }),
            _react2.default.createElement(
              HeaderDown,
              null,
              _react2.default.createElement(
                HeaderDownInner,
                { inner: inner },
                this.props.children
              )
            )
          )
        )
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'Layout__Root',
  componentId: 'sc-4za5ai-0'
})(['']);

var DrawerRight = _styledComponents2.default.div.withConfig({
  displayName: 'Layout__DrawerRight',
  componentId: 'sc-4za5ai-1'
})(['', '{margin-left:', ';}', '{margin-left:', ';}'], _theme2.default.tabletMin, function (p) {
  return p.theme.drawer.tabletWidth;
}, _theme2.default.desktopMin, function (p) {
  return p.theme.drawer.desktopWidth;
});

// use padding-top, for margin can be collapsed.
var HeaderDown = _styledComponents2.default.div.withConfig({
  displayName: 'Layout__HeaderDown',
  componentId: 'sc-4za5ai-2'
})(['padding-top:', ';'], function (p) {
  return p.theme.header.height;
});

var HeaderDownInner = _styledComponents2.default.div.withConfig({
  displayName: 'Layout__HeaderDownInner',
  componentId: 'sc-4za5ai-3'
})(['', ';'], function (p) {
  return p.inner && '\n    background-color: white;\n    margin-top: 24px;\n    border-radius: 3px;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n\n    ' + _theme2.default.desktopMin + ' {\n      margin-left: 24px;\n      margin-right: 24px;\n    }\n  ';
});

var DEFAULT_THEME = {
  drawer: {
    desktopWidth: '230px',
    tabletWidth: '80px'
  },

  header: {
    height: '50px'
  }
};

Layout.Header = _Header2.default;
Layout.Content = _Content.Content;
Layout.Left = _Content.Left;
Layout.Right = _Content.Right;

exports.default = Layout;