'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 1000px;\n  height: 600px;\n  margin-left: 32px;\n\n  @media (max-width: 1024px) {\n    width: 500px;\n    height: 300px;\n    margin-left: -64px;\n    transform-origin: 0 0;\n    transform: scale(0.6);\n  }\n\n  @media (max-width: 600px) {\n    width: 250px;\n    height: 150px;\n    margin-left: -80px;\n    transform-origin: 0 0;\n    transform: scale(0.35);\n  }\n'], ['\n  width: 1000px;\n  height: 600px;\n  margin-left: 32px;\n\n  @media (max-width: 1024px) {\n    width: 500px;\n    height: 300px;\n    margin-left: -64px;\n    transform-origin: 0 0;\n    transform: scale(0.6);\n  }\n\n  @media (max-width: 600px) {\n    width: 250px;\n    height: 150px;\n    margin-left: -80px;\n    transform-origin: 0 0;\n    transform: scale(0.35);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  transform-origin: left top;\n\n  &.laptop {\n    transform: translate3d(0px, 40px, 0) scale(0.5);\n  }\n\n  &.tablet {\n    transform: translate3d(380px, 130px, 0) scale(0.5);\n  }\n\n  &.phone {\n    transform: translate3d(800px, 110px, 0) scale(0.5);\n  }\n'], ['\n  position: absolute;\n  transform-origin: left top;\n\n  &.laptop {\n    transform: translate3d(0px, 40px, 0) scale(0.5);\n  }\n\n  &.tablet {\n    transform: translate3d(380px, 130px, 0) scale(0.5);\n  }\n\n  &.phone {\n    transform: translate3d(800px, 110px, 0) scale(0.5);\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Device = require('./Device');

var _Device2 = _interopRequireDefault(_Device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeviceViewer = function (_Component) {
  _inherits(DeviceViewer, _Component);

  function DeviceViewer() {
    _classCallCheck(this, DeviceViewer);

    return _possibleConstructorReturn(this, (DeviceViewer.__proto__ || Object.getPrototypeOf(DeviceViewer)).apply(this, arguments));
  }

  _createClass(DeviceViewer, [{
    key: 'render',
    value: function render() {
      var src = this.props.src;

      return _react2.default.createElement(
        Root,
        null,
        _react2.default.createElement(
          RootInner,
          null,
          _react2.default.createElement(Device2, { device: 'laptop', src: src }),
          _react2.default.createElement(Device2, { device: 'tablet', src: src, landscape: true }),
          _react2.default.createElement(Device2, { device: 'phone', src: src })
        )
      );
    }
  }]);

  return DeviceViewer;
}(_react.Component);

var Root = _styledComponents2.default.div(_templateObject);

var RootInner = _styledComponents2.default.div(_templateObject2);

var Device2 = (0, _styledComponents2.default)(_Device2.default)(_templateObject3);

exports.default = DeviceViewer;