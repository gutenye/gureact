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

var GridListItemWithPrice = function (_React$Component) {
  _inherits(GridListItemWithPrice, _React$Component);

  function GridListItemWithPrice() {
    _classCallCheck(this, GridListItemWithPrice);

    return _possibleConstructorReturn(this, (GridListItemWithPrice.__proto__ || Object.getPrototypeOf(GridListItemWithPrice)).apply(this, arguments));
  }

  _createClass(GridListItemWithPrice, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          image = _props.image,
          price = _props.price,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement(
        Root,
        { className: className, style: style },
        _react2.default.createElement('img', { src: image, alt: 'product' }),
        _react2.default.createElement(
          'div',
          { className: 'price' },
          price
        )
      );
    }
  }]);

  return GridListItemWithPrice;
}(_react2.default.Component);

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'GridListItemWithPrice__Root',
  componentId: 'sc-1coy87r-0'
})(['position:relative;.price{position:absolute;bottom:5px;right:10px;background:rgba(0,0,0,0.4);border-radius:2px;color:white;font-size:0.8rem;font-weight:bold;line-height:22px;height:22px;padding:0 5px;}']);
exports.default = GridListItemWithPrice;