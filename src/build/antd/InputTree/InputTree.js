'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../Input/Input');

var _Input2 = _interopRequireDefault(_Input);

var _TreeSelect = require('../TreeSelect/TreeSelect');

var _TreeSelect2 = _interopRequireDefault(_TreeSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <InputTree value onChange options
var AntdInputTree = function (_React$Component) {
  _inherits(AntdInputTree, _React$Component);

  function AntdInputTree() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AntdInputTree);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AntdInputTree.__proto__ || Object.getPrototypeOf(AntdInputTree)).call.apply(_ref, [this].concat(args))), _this), _this.treeOnChange = function (value) {
      _this.props.onChange(value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AntdInputTree, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          onChange = _props.onChange,
          options = _props.options,
          defaultValue = _props.defaultValue,
          placeholder = _props.placeholder;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Input2.default, {
          value: value,
          onChange: onChange,
          defaultValue: defaultValue,
          placeholder: placeholder
        }),
        _react2.default.createElement(_TreeSelect2.default, {
          value: value,
          onChange: this.treeOnChange,
          options: options
        })
      );
    }
  }]);

  return AntdInputTree;
}(_react2.default.Component);

exports.default = AntdInputTree;