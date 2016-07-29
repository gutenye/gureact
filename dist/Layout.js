"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "header",
          { style: s.top },
          top
        ),
        _react2.default.createElement(
          "aside",
          { style: s.side },
          side
        ),
        _react2.default.createElement(
          "main",
          { style: s.main },
          main
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;


var s = {
  top: {
    backgroundColor: "white",
    position: "fixed",
    height: "64px",
    top: 0,
    left: 0,
    right: 0
  },

  side: {
    position: "fixed",
    width: "224px",
    height: "100%",
    top: "64px",
    left: 0
  },

  main: {
    marginLeft: "224px",
    marginTop: "64px"
  }
};