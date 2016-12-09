'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  &.phone {\n    width: 360px;\n    height: 600px;\n    margin: 60px 0 96px;\n  }\n  &.phone.landscape {\n    width: 600px;\n    height: 360px;\n    margin: 0;\n  }\n  &.tablet {\n    width: 720px;\n    height: 1024px;\n    margin: 60px 0 96px;\n  }\n  &.tablet.landscape {\n    width: 1024px;\n    height: 720px;\n    margin: 0;\n  }\n  &.laptop {\n    width: 1366px;\n    height: 800px;\n  }\n  &.phone:before,\n  &.tablet:before {\n    display: block;\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: -60px -16px -96px -16px;\n    border-radius: 32px;\n    background: #666;\n  }\n  &.phone.landscape:before,\n  &.tablet.landscape:before {\n    margin: -16px -96px -16px -60px;\n  }\n  &.phone:after,\n  &.tablet:after {\n    display: block;\n    content: "";\n    position: absolute;\n    bottom: -76px;\n    left: 50%;\n    width: 56px;\n    height: 56px;\n    margin-left: -28px;\n    border-radius: 28px;\n    background: #fff;\n  }\n  &.phone.landscape:after,\n  &.tablet.landscape:after {\n    top: 50%;\n    right: -76px;\n    bottom: auto;\n    left: auto;\n    margin-top: -28px;\n  }\n  &.laptop:before {\n    display: block;\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: -24px;\n    border-radius: 12px;\n    background: #666;\n  }\n  &.laptop:after {\n    display: block;\n    content: "";\n    position: absolute;\n    right: 0;\n    bottom: -56px;\n    left: -140px;\n    height: 56px;\n    margin: -24px;\n    border-bottom-right-radius: 12px;\n    border-bottom-left-radius: 12px;\n    background: #777;\n  }\n'], ['\n  position: relative;\n  &.phone {\n    width: 360px;\n    height: 600px;\n    margin: 60px 0 96px;\n  }\n  &.phone.landscape {\n    width: 600px;\n    height: 360px;\n    margin: 0;\n  }\n  &.tablet {\n    width: 720px;\n    height: 1024px;\n    margin: 60px 0 96px;\n  }\n  &.tablet.landscape {\n    width: 1024px;\n    height: 720px;\n    margin: 0;\n  }\n  &.laptop {\n    width: 1366px;\n    height: 800px;\n  }\n  &.phone:before,\n  &.tablet:before {\n    display: block;\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: -60px -16px -96px -16px;\n    border-radius: 32px;\n    background: #666;\n  }\n  &.phone.landscape:before,\n  &.tablet.landscape:before {\n    margin: -16px -96px -16px -60px;\n  }\n  &.phone:after,\n  &.tablet:after {\n    display: block;\n    content: "";\n    position: absolute;\n    bottom: -76px;\n    left: 50%;\n    width: 56px;\n    height: 56px;\n    margin-left: -28px;\n    border-radius: 28px;\n    background: #fff;\n  }\n  &.phone.landscape:after,\n  &.tablet.landscape:after {\n    top: 50%;\n    right: -76px;\n    bottom: auto;\n    left: auto;\n    margin-top: -28px;\n  }\n  &.laptop:before {\n    display: block;\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: -24px;\n    border-radius: 12px;\n    background: #666;\n  }\n  &.laptop:after {\n    display: block;\n    content: "";\n    position: absolute;\n    right: 0;\n    bottom: -56px;\n    left: -140px;\n    height: 56px;\n    margin: -24px;\n    border-bottom-right-radius: 12px;\n    border-bottom-left-radius: 12px;\n    background: #777;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border: 0;\n'], ['\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * <Device
 *    src='https://www.example.com'
 *    device='phone' tablet laptop
 *    landscape
 */
var Device = function (_Component) {
  _inherits(Device, _Component);

  function Device() {
    _classCallCheck(this, Device);

    return _possibleConstructorReturn(this, (Device.__proto__ || Object.getPrototypeOf(Device)).apply(this, arguments));
  }

  _createClass(Device, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          device = _props.device,
          landscape = _props.landscape,
          src = _props.src;

      return _react2.default.createElement(
        Root,
        { className: (0, _classnames2.default)(className, device, { landscape: landscape }) },
        _react2.default.createElement(Iframe, { src: src })
      );
    }
  }]);

  return Device;
}(_react.Component);

var Root = _styledComponents2.default.div(_templateObject);
var Iframe = _styledComponents2.default.iframe(_templateObject2);

exports.default = Device;