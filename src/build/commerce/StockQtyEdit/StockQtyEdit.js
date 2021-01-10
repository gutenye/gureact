'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StockQtyEdit = function (_React$Component) {
  _inherits(StockQtyEdit, _React$Component);

  function StockQtyEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StockQtyEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StockQtyEdit.__proto__ || Object.getPrototypeOf(StockQtyEdit)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      output: {
        L: { 大红: 0, 蓝色: 0, 绿色: 0, 黑色: 0 },
        XL: { 大红: 0, 蓝色: 0, 绿色: 0, 黑色: 0 }
      }
    }, _this.onUpdate = function (size, color) {
      return function (e) {
        var output = _this.state.output;

        output[size][color] = e.target.valueAsNumber;
        _this.setState({ output: output });
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StockQtyEdit, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var output = this.state.output;

      var options = [{ name: 'Size', values: ['L', 'XL'] }, { name: 'Color', values: ['大红', '蓝色', '绿色', '黑色'] }];
      var variants = {
        L: { 大红: 1, 蓝色: 1, 绿色: 2, 黑色: 1 },
        XL: { 大红: 1, 蓝色: 1, 绿色: 2, 黑色: 1 }
      };
      var sizes = options[0].values;
      var colors = options[1].values;
      function sumSize(colorMap) {
        return (0, _lodash.sum)(Object.values(colorMap));
      }
      var colorMap = (0, _lodash.reduce)(variants, function (obj, v) {
        colors.forEach(function (color) {
          obj[color] = (obj[color] || 0) + v[color];
        });
        return obj;
      }, {});

      return _react2.default.createElement(
        Table,
        null,
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement('th', null),
            colors.map(function (color) {
              return _react2.default.createElement(
                'th',
                { key: color },
                color
              );
            }),
            _react2.default.createElement(
              'th',
              null,
              '\u5408\u8BA1'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          sizes.map(function (size, i) {
            return [_react2.default.createElement(
              'tr',
              { key: i + '1' },
              _react2.default.createElement(
                'td',
                null,
                size
              ),
              colors.map(function (color) {
                return _react2.default.createElement(
                  'td',
                  { key: color },
                  _react2.default.createElement('input', {
                    type: 'number',
                    value: output[size][color],
                    onChange: _this2.onUpdate(size, color)
                  })
                );
              }),
              _react2.default.createElement(
                'td',
                null,
                sumSize(output[size])
              )
            ), _react2.default.createElement(
              'tr',
              { key: i + '2' },
              _react2.default.createElement('td', null),
              colors.map(function (color) {
                return _react2.default.createElement(
                  'td',
                  { key: color },
                  variants[size][color]
                );
              })
            )];
          }),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '\u5408\u8BA1'
            ),
            colors.map(function (color) {
              return _react2.default.createElement(
                'td',
                { key: color },
                colorMap[color]
              );
            })
          )
        )
      );
    }
  }]);

  return StockQtyEdit;
}(_react2.default.Component);

var Table = _styledComponents2.default.table.withConfig({
  displayName: 'StockQtyEdit__Table',
  componentId: 'sc-1oab7t6-0'
})(['']);

exports.default = StockQtyEdit;