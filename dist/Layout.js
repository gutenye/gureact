"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var top = _props.top;
      var side = _props.side;
      var main = _props.main;
      var topHeight = _props.topHeight;
      var sideWidth = _props.sideWidth;
      var topClassName = _props.topClassName;
      var topStyle = _props.topStyle;
      var sideClassName = _props.sideClassName;
      var sideStyle = _props.sideStyle;
      var mainClassName = _props.mainClassName;
      var mainStyle = _props.mainStyle;

      s.top = Object.assign(s.top, {
        height: topHeight
      });
      s.side = Object.assign(s.side, {
        width: sideWidth,
        top: topHeight
      });
      if (top && side) {
        s.main = Object.assign(s.main, {
          marginTop: topHeight,
          marginLeft: sideWidth
        });
        // continue
      } else if (top) {
        s.main = Object.assign(s.main, {
          marginTop: topHeight
        });
      } else if (side) {
        s.side = Object.assign(s.side, {
          top: 0
        });
        s.main = Object.assign(s.main, {
          marginLeft: sideWidth
        });
      }
      return _react2.default.createElement(
        "div",
        null,
        top && _react2.default.createElement(
          "header",
          { className: topClassName, style: _extends({}, s.top, topStyle) },
          top
        ),
        side && _react2.default.createElement(
          "aside",
          { className: sideClassName, style: _extends({}, s.side, sideStyle) },
          side
        ),
        _react2.default.createElement(
          "main",
          { className: mainClassName, style: _extends({}, s.main, mainStyle) },
          main
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

Layout.defaultProps = {
  topHeight: 64,
  sideWidth: 224,
  topClassName: "",
  sideClassName: "",
  mainClassName: "",
  topStyle: {},
  sideStyle: {},
  mainStyle: {}
};
exports.default = Layout;


var s = {
  top: {
    backgroundColor: "white",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0
  },

  side: {
    position: "fixed",
    height: "100%",
    left: 0
  },

  main: {
    // marginTop: "64px"
    // marginLeft: "224px"
  }
};