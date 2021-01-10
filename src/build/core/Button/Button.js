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

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          action = _props.action,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['action', 'children']);

      if ((0, _lodash.isString)(action)) {
        return _react2.default.createElement(
          LinkStyled,
          _extends({ to: action }, rest),
          children
        );
      } else {
        return _react2.default.createElement(
          Root,
          _extends({ onClick: action }, rest),
          children
        );
      }
    }
  }]);

  return Button;
}(_react2.default.Component);

var shared = (0, _styledComponents.css)(['display:inline-flex;align-items:center;padding:0 1rem;height:100%;cursor:pointer;', ';'], function (p) {
  return p.primary && '\n    color: ' + p.theme.textPrimaryOnPrimary + ';\n    background: ' + p.theme.primary + ';\n  ';
});

var LinkStyled = (0, _styledComponents2.default)(function (p) {
  return _react2.default.createElement(
    _reactRouterDom.Link,
    (0, _lodash.omit)(p, 'primary'),
    p.children
  );
}).withConfig({
  displayName: 'Button__LinkStyled',
  componentId: 'sc-100rcxt-0'
})(['', ';'], shared);

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'Button__Root',
  componentId: 'sc-100rcxt-1'
})(['', ';'], shared);

exports.default = Button;