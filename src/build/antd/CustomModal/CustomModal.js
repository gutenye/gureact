'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/modal/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// CustomModal.open({
//   component: Button,
//   onOk, onCancel, onClose,
//   <rest>          // passed to component
// })
//
// CustomModal.ok()
// CustomModal.cancel()
// CustomModal.close()
var CustomModal = function (_React$Component) {
  _inherits(CustomModal, _React$Component);

  function CustomModal() {
    _classCallCheck(this, CustomModal);

    return _possibleConstructorReturn(this, (CustomModal.__proto__ || Object.getPrototypeOf(CustomModal)).apply(this, arguments));
  }

  _createClass(CustomModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Component = _props.component,
          close = _props.close,
          rest = _objectWithoutProperties(_props, ['component', 'close']);

      return _react2.default.createElement(
        _modal2.default,
        { visible: true, footer: null, onCancel: close },
        _react2.default.createElement(Component, rest)
      );
    }
  }]);

  return CustomModal;
}(_react2.default.Component);

CustomModal.open = function (options) {
  options = Object.assign({
    onOpen: function onOpen() {},
    onOk: function onOk() {},
    onCancel: function onCancel() {},
    onClose: function onClose() {}
  }, options);

  var div = document.createElement('div');
  document.body.appendChild(div);

  function close(arg) {
    arg && arg.isOk ? options.onOk() : options.onCancel();
    options.onClose();
    var unmountResult = _reactDom2.default.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
  CustomModal.close = close;
  CustomModal.ok = function () {
    close({ isOk: true });
  };
  CustomModal.cancel = close;

  var _options = options,
      onOpen = _options.onOpen,
      onOk = _options.onOk,
      onCancel = _options.onCancel,
      onClose = _options.onClose,
      rest = _objectWithoutProperties(_options, ['onOpen', 'onOk', 'onCancel', 'onClose']);

  options.onOpen();
  _reactDom2.default.render(_react2.default.createElement(CustomModal, _extends({}, rest, { close: close })), div);
};

exports.default = CustomModal;