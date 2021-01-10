'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <Col w={1} md={1/2} lg={1/3}>
var Col = function (_React$Component) {
  _inherits(Col, _React$Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        ColStyled,
        this.props,
        children
      );
    }
  }]);

  return Col;
}(_react2.default.Component);

// 1/3 -> 33.3333


function toPrecent(value) {
  return (value * 100).toPrecision(4);
}

var ColStyled = _styledComponents2.default.div.withConfig({
  displayName: 'Grid__ColStyled',
  componentId: 'sc-14joy69-0'
})(['display:inline-block;width:', '%;box-sizing:border-box;padding:0 12px;@media (min-width:426px){', '}'], function (p) {
  return toPrecent(p.w || 1);
}, function (p) {
  return p.sm ? 'width: ' + p.sm + '%;' : '';
});

var Container = function (_React$Component2) {
  _inherits(Container, _React$Component2);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        ContainerStyled,
        null,
        children
      );
    }
  }]);

  return Container;
}(_react2.default.Component);

var ContainerStyled = _styledComponents2.default.div.withConfig({
  displayName: 'Grid__ContainerStyled',
  componentId: 'sc-14joy69-1'
})(['@media (min-width:1024px){width:1024px;margin:0 auto;}']);

exports.default = {
  Container: Container,
  Col: Col
};