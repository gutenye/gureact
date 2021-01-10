'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = require('antd/lib/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/breadcrumb/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
// <Breadcrumb items='Title' />
// <Breadcrumb items=[['Posts', '/posts'], 'New Post'] />
//
var BreadcrumbComp = function (_React$Component) {
  _inherits(BreadcrumbComp, _React$Component);

  function BreadcrumbComp() {
    _classCallCheck(this, BreadcrumbComp);

    return _possibleConstructorReturn(this, (BreadcrumbComp.__proto__ || Object.getPrototypeOf(BreadcrumbComp)).apply(this, arguments));
  }

  _createClass(BreadcrumbComp, [{
    key: 'render',
    value: function render() {
      // mobx returns ObservaleArray, not Array type
      var items = this.props.items;

      items = (0, _lodash.isString)(items) ? [items] : items;
      return _react2.default.createElement(
        _breadcrumb2.default,
        null,
        items.map(function (v, i) {
          return _react2.default.createElement(
            _breadcrumb2.default.Item,
            { key: i },
            (0, _lodash.isString)(v) ? _react2.default.createElement(
              'span',
              null,
              v
            ) : _react2.default.createElement(
              _reactRouterDom.Link,
              { to: v[1] },
              v[0]
            )
          );
        })
      );
    }
  }]);

  return BreadcrumbComp;
}(_react2.default.Component);

exports.default = BreadcrumbComp;