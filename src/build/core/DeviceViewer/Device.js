'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Device = function (_React$Component) {
  _inherits(Device, _React$Component);

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
}(_react2.default.Component);

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'Device__Root',
  componentId: 'hc44fk-0'
})(['position:relative;&.phone{width:360px;height:600px;margin:60px 0 96px;}&.phone.landscape{width:600px;height:360px;margin:0;}&.tablet{width:720px;height:1024px;margin:60px 0 96px;}&.tablet.landscape{width:1024px;height:720px;margin:0;}&.laptop{width:1366px;height:800px;}&.phone:before,&.tablet:before{display:block;content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;margin:-60px -16px -96px -16px;border-radius:32px;background:#666;}&.phone.landscape:before,&.tablet.landscape:before{margin:-16px -96px -16px -60px;}&.phone:after,&.tablet:after{display:block;content:\'\';position:absolute;bottom:-76px;left:50%;width:56px;height:56px;margin-left:-28px;border-radius:28px;background:#fff;}&.phone.landscape:after,&.tablet.landscape:after{top:50%;right:-76px;bottom:auto;left:auto;margin-top:-28px;}&.laptop:before{display:block;content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;margin:-24px;border-radius:12px;background:#666;}&.laptop:after{display:block;content:\'\';position:absolute;right:0;bottom:-56px;left:-140px;height:56px;margin:-24px;border-bottom-right-radius:12px;border-bottom-left-radius:12px;background:#777;}']);

var Iframe = _styledComponents2.default.iframe.withConfig({
  displayName: 'Device__Iframe',
  componentId: 'hc44fk-1'
})(['position:relative;width:100%;height:100%;background-color:#fff;border:0;']);

exports.default = Device;