'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/select/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
// <Select
//   options = [value], [{FIELD: value}], fn
//   field = 'name'*
//   onSearch
//
var AntdSelect = function (_React$Component) {
  _inherits(AntdSelect, _React$Component);

  function AntdSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AntdSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AntdSelect.__proto__ || Object.getPrototypeOf(AntdSelect)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (value) {
      _this.props.onChange(value);
      if (_this.props.onSearch) _this.props.onSearch(value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AntdSelect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          field = _props.field,
          onChange = _props.onChange,
          onSearch = _props.onSearch,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['options', 'field', 'onChange', 'onSearch', 'value']);
      // Fix placeholder is showed when value is undefined, not ''
      // react-final-form, set initialValue to undefined, but value becomes ''.


      value = value === '' ? undefined : value;
      if ((0, _lodash.isFunction)(options)) {
        options = options();
      }
      if ((0, _lodash.isPlainObject)(options[0])) {
        options = options.map(function (v) {
          return v[field];
        });
      }
      return _react2.default.createElement(
        _select2.default,
        _extends({ value: value, onChange: this.onChange }, rest),
        options.map(function (v) {
          return _react2.default.createElement(
            _select2.default.Option,
            { key: v, value: v },
            v
          );
        })
      );
    }
  }]);

  return AntdSelect;
}(_react2.default.Component);

AntdSelect.defaultProps = {
  options: [],
  field: 'name',
  tokenSeparators: [',']
};
exports.default = AntdSelect;