'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridList = function (_React$Component) {
  _inherits(GridList, _React$Component);

  function GridList() {
    _classCallCheck(this, GridList);

    return _possibleConstructorReturn(this, (GridList.__proto__ || Object.getPrototypeOf(GridList)).apply(this, arguments));
  }

  _createClass(GridList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;

      return _react2.default.createElement(
        Root,
        _extends({ className: className }, this.props),
        children.map(function (v, i) {
          return _react2.default.createElement(
            'div',
            { key: i, className: 'item' },
            v
          );
        })
      );
    }
  }]);

  return GridList;
}(_react2.default.Component);

GridList.defaultProps = {
  gutter: 10
};


var Root = _styledComponents2.default.div.withConfig({
  displayName: 'GridList__Root',
  componentId: 'sc-1ssxgtf-0'
})(['display:flex;flex-wrap:wrap;justify-content:center;> .item{padding:', 'px;width:50%;max-width:200px;}'], function (p) {
  return p.gutter;
});

exports.default = GridList;