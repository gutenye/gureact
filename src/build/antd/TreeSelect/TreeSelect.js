'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _treeSelect = require('antd/lib/tree-select');

var _treeSelect2 = _interopRequireDefault(_treeSelect);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.simple2complex = simple2complex;

require('antd/lib/tree-select/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  options: {China: {Zhejiang: {Yiwu: 1, Hangzhou: 1}, Shanghai: 1}}
  onSearch(value)
  treeNodeLabelProp: 'value',
  showSearch: true,
  allowClear: true,
  treeDefaultExpandAll: true,
*/
var AntdTreeSelect = function (_React$Component) {
  _inherits(AntdTreeSelect, _React$Component);

  function AntdTreeSelect() {
    _classCallCheck(this, AntdTreeSelect);

    return _possibleConstructorReturn(this, (AntdTreeSelect.__proto__ || Object.getPrototypeOf(AntdTreeSelect)).apply(this, arguments));
  }

  _createClass(AntdTreeSelect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          onChange = _props.onChange,
          onSearch = _props.onSearch,
          rest = _objectWithoutProperties(_props, ['options', 'onChange', 'onSearch']);

      rest.treeData = simple2complex(options);
      rest.onChange = function (value, label, extra) {
        onChange(value, label, extra);
        if (onSearch) onSearch(value);
      };
      return _react2.default.createElement(_treeSelect2.default, rest);
    }
  }]);

  return AntdTreeSelect;
}(_react2.default.Component);

/*
  {China: {Zhejiang: {Yiwu: 1, Hangzhou: 1}, Shanghai: 1}}
  ->
  [
    { label: 'China', value: 'China', key: 'China', children: [
      { label: 'Zhejiang', value: 'China.Zhejiang', key: 'China.Zhejiang'
*/


AntdTreeSelect.defaultProps = {
  treeNodeLabelProp: 'value',
  showSearch: true,
  allowClear: true,
  treeDefaultExpandAll: true
};
function simple2complex(data) {
  return mapChildren(data, '');
}

// I'm recursive
function mapChildren(a, parent) {
  if (!(0, _lodash.isPlainObject)(a)) throw new Error('tree data is not a plain object');
  return (0, _lodash.map)(a, function (v, k) {
    var value = '' + parent + k;
    if (v === 1) return { label: k, value: value, key: value };else return {
      label: k,
      value: value,
      key: value,
      children: mapChildren(v, value + '.')
    };
  });
}

exports.default = AntdTreeSelect;