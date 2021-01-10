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

var GridListItemWithDescription = function (_React$Component) {
  _inherits(GridListItemWithDescription, _React$Component);

  function GridListItemWithDescription() {
    _classCallCheck(this, GridListItemWithDescription);

    return _possibleConstructorReturn(this, (GridListItemWithDescription.__proto__ || Object.getPrototypeOf(GridListItemWithDescription)).apply(this, arguments));
  }

  _createClass(GridListItemWithDescription, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          image = _props.image,
          description = _props.description,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement(
        Root,
        { className: className, style: style },
        _react2.default.createElement('img', { src: image, alt: 'product' }),
        _react2.default.createElement(
          'div',
          { className: 'description' },
          description
        )
      );
    }
  }]);

  return GridListItemWithDescription;
}(_react2.default.Component);

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'GridListItemWithDescription__Root',
  componentId: 'vo9fbo-0'
})(['position:relative;.description{position:absolute;bottom:0;left:0;right:0;height:2rem;line-height:2rem;background:#212121;padding:0 5px;color:white;}']);
exports.default = GridListItemWithDescription;