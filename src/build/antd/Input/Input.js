'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/input/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <Input
//   value onChange(value)
//   ---
//   onSearch onPressEnter
var AntdInput = function (_React$Component) {
  _inherits(AntdInput, _React$Component);

  function AntdInput() {
    _classCallCheck(this, AntdInput);

    return _possibleConstructorReturn(this, (AntdInput.__proto__ || Object.getPrototypeOf(AntdInput)).apply(this, arguments));
  }

  _createClass(AntdInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          onChange = _props.onChange,
          onSearch = _props.onSearch,
          onPressEnter = _props.onPressEnter,
          rest = _objectWithoutProperties(_props, ['onChange', 'onSearch', 'onPressEnter']);

      if (onChange) rest.onChange = function (e) {
        onChange(e.target.value);
      };
      rest.onPressEnter = function (e) {
        onSearch(e.target.value);
        onPressEnter(e.target.value);
      };
      return _react2.default.createElement(_input2.default, _extends({ ref: function ref(v) {
          return _this2.input = v;
        } }, rest));
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.input.focus();
    }
  }]);

  return AntdInput;
}(_react2.default.Component);

AntdInput.defaultProps = {
  onSearch: function onSearch() {},
  onPressEnter: function onPressEnter() {}
};
exports.default = AntdInput;