'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

require('antd/lib/menu/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouterDom = require('react-router-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches;
var menuMode = isTablet ? 'vertical' : 'inline';

var Drawer = (0, _reactRouter.withRouter)(_class = function (_React$Component) {
  _inherits(Drawer, _React$Component);

  function Drawer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Drawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call.apply(_ref, [this].concat(args))), _this), _this.onRootClick = function () {
      _this.props.closeDrawer();
    }, _this.onDrawerClick = function (e) {
      e.stopPropagation();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Drawer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          appName = _props.appName,
          menu = _props.menu,
          isOpen = _props.isOpen,
          closeDrawer = _props.closeDrawer,
          end = _props.end;

      return _react2.default.createElement(
        Root,
        _extends({}, this.props, { onClick: this.onRootClick }),
        _react2.default.createElement(
          'div',
          { className: 'Drawer-drawer', onClick: this.onDrawerClick },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'Drawer-logo', to: '/' },
            appName
          ),
          _react2.default.createElement(
            _menu2.default,
            { mode: menuMode },
            menu.map(function (v) {
              return _react2.default.createElement(
                _menu2.default.SubMenu,
                {
                  key: v.title,
                  title: _react2.default.createElement(
                    'span',
                    null,
                    v.icon,
                    _react2.default.createElement(
                      Title,
                      null,
                      v.title
                    )
                  )
                },
                v.children.map(function (c) {
                  return _react2.default.createElement(
                    _menu2.default.Item,
                    { key: c.title },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: c.to, onClick: closeDrawer },
                      c.title
                    )
                  );
                })
              );
            })
          )
        )
      );
    }
  }]);

  return Drawer;
}(_react2.default.Component)) || _class;

var Root = _styledComponents2.default.aside.withConfig({
  displayName: 'Drawer__Root',
  componentId: 'sc-1ik5sgp-0'
})(['position:fixed;top:0;left:0;z-index:20;height:100%;.Drawer-drawer{height:100%;background-color:white;}', '{width:100%;overflow:hidden;pointer-events:', ';contain:strict;::before{display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);content:\'\';opacity:', ';will-change:opacity;}.Drawer-drawer{background:#fff;box-shadow:0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12);left:0;right:initial;display:flex;position:absolute;flex-direction:column;width:calc(100% - 56px);max-width:280px;transform:', ';will-change:transform;box-sizing:border-box;overflow:hidden;touch-action:none;}}.Drawer-drawer{', '{width:', ';border-right:1px solid #e4e4e4;}', '{width:', ';}.Drawer-logo{display:inline-flex;height:64px;width:100%;align-items:center;justify-content:center;background-color:', ';color:', ';}}.ant-menu-submenu-vertical > .ant-menu-submenu-title:after{display:none;}'], _theme2.default.mobileOnly, function (p) {
  return p.isOpen ? 'auto' : 'none';
}, function (p) {
  return p.isOpen ? 1 : 0;
}, function (p) {
  return p.isOpen ? 'none' : 'translateX(calc(-100% - 20px))';
}, _theme2.default.tabletMin, function (p) {
  return p.theme.drawer.tabletWidth;
}, _theme2.default.desktopMin, function (p) {
  return p.theme.drawer.desktopWidth;
}, function (p) {
  return p.theme.primary;
}, function (p) {
  return p.theme.textPrimaryOnPrimary;
});

var Title = _styledComponents2.default.span.withConfig({
  displayName: 'Drawer__Title',
  componentId: 'sc-1ik5sgp-1'
})(['', '{display:none;}'], _theme2.default.tabletOnly);
exports.default = Drawer;