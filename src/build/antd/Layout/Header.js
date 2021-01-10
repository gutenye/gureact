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

var _lodash = require('lodash');

var _menu = require('react-icons/lib/md/menu');

var _menu2 = _interopRequireDefault(_menu);

var _Breadcrumb = require('../Breadcrumb/Breadcrumb');

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _Button = require('../../core/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { app } from 'states'
// <Header header={app.header} openDrawer
//
// @setHeader({
//   title
//   actions: [
//     {title, action:link|fn|METHOD, primary}
// })
// class HomePage extends React.Component {
//   componentDidMount() {
//     app.header.methods = {         // for action METHOD
//       save: this.save
//     }
var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.getAction = function (action) {
      // '/posts'
      if ((0, _lodash.isString)(action) && action.startsWith('/')) {
        return action;
        // 'save' | fn
      } else {
        return function () {
          var method = _this.props.header.methods[action] || action; // call it later so that you can change methods later
          method();
        };
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          header = _props.header,
          openDrawer = _props.openDrawer;

      var _title$actions$header = _extends({ title: '', actions: [] }, header),
          title = _title$actions$header.title,
          actions = _title$actions$header.actions;

      return _react2.default.createElement(
        Root,
        null,
        _react2.default.createElement(_menu2.default, { className: 'icon-menu', onClick: openDrawer }),
        _react2.default.createElement(
          'div',
          { className: 'title' },
          _react2.default.createElement(_Breadcrumb2.default, { items: title })
        ),
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          actions.map(function (_ref2) {
            var title = _ref2.title,
                action = _ref2.action,
                rest = _objectWithoutProperties(_ref2, ['title', 'action']);

            return _react2.default.createElement(
              _Button2.default,
              _extends({
                primary: true,
                key: title,
                action: _this2.getAction(action)
              }, rest),
              title
            );
          })
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'Header__Root',
  componentId: 'sc-1tdf0da-0'
})(['position:fixed;top:0;left:0;right:0;height:', ';background:white;display:flex;align-items:center;z-index:10;border-bottom:1px solid #ebeef0;', '{left:', ';}', '{left:', ';}> .icon-menu{', '{display:none;}}> .title{flex:1;margin-left:24px;}> .actions{height:100%;}'], function (p) {
  return p.theme.header.height;
}, _theme2.default.tabletMin, function (p) {
  return p.theme.drawer.tabletWidth;
}, _theme2.default.desktopMin, function (p) {
  return p.theme.drawer.desktopWidth;
}, _theme2.default.tabletMin);

exports.default = Header;