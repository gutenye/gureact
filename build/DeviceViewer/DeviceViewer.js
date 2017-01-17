'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 1000px;\n  height: 600px;\n  margin-left: 32px;\n  transform: scale(', ');\n\n  @media (max-width: 1024px) {\n    width: 500px;\n    height: 300px;\n    margin-left: -64px;\n    transform-origin: 0 0;\n    transform: scale(0.6);\n  }\n\n  @media (max-width: 600px) {\n    width: 250px;\n    height: 150px;\n    margin-left: -80px;\n    transform-origin: 0 0;\n    transform: scale(0.35);\n  }\n'], ['\n  width: 1000px;\n  height: 600px;\n  margin-left: 32px;\n  transform: scale(', ');\n\n  @media (max-width: 1024px) {\n    width: 500px;\n    height: 300px;\n    margin-left: -64px;\n    transform-origin: 0 0;\n    transform: scale(0.6);\n  }\n\n  @media (max-width: 600px) {\n    width: 250px;\n    height: 150px;\n    margin-left: -80px;\n    transform-origin: 0 0;\n    transform: scale(0.35);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  transform-origin: left top;\n\n  &.laptop {\n    transform: translate3d(', ', 0) scale(0.5);\n  }\n\n  &.tablet {\n    transform: translate3d(', ', 0) scale(0.5);\n  }\n\n  &.phone {\n    transform: translate3d(', ', 0) scale(0.5);\n  }\n'], ['\n  position: absolute;\n  transform-origin: left top;\n\n  &.laptop {\n    transform: translate3d(', ', 0) scale(0.5);\n  }\n\n  &.tablet {\n    transform: translate3d(', ', 0) scale(0.5);\n  }\n\n  &.phone {\n    transform: translate3d(', ', 0) scale(0.5);\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Device = require('./Device');

var _Device2 = _interopRequireDefault(_Device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// scale='0.6' is 600px width
// laptop: 683x400 tablet: 612x360 phone: 180x300
// laptopPos='0px, 40px'
// tabletPos='180px, 230px'
// phonePos='600px, 210px'

var DeviceViewer = (_temp = _class = function (_Component) {
  _inherits(DeviceViewer, _Component);

  function DeviceViewer() {
    _classCallCheck(this, DeviceViewer);

    return _possibleConstructorReturn(this, (DeviceViewer.__proto__ || Object.getPrototypeOf(DeviceViewer)).apply(this, arguments));
  }

  _createClass(DeviceViewer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          src = _props.src,
          scale = _props.scale,
          laptopPos = _props.laptopPos,
          tabletPos = _props.tabletPos,
          phonePos = _props.phonePos;

      return _react2.default.createElement(
        Root,
        null,
        _react2.default.createElement(
          RootInner,
          { scale: scale },
          _react2.default.createElement(Device2, { device: 'laptop', src: src, pos: laptopPos }),
          _react2.default.createElement(Device2, { device: 'tablet', landscape: true, pos: tabletPos, src: src }),
          _react2.default.createElement(Device2, { device: 'phone', pos: phonePos, src: src })
        )
      );
    }
  }]);

  return DeviceViewer;
}(_react.Component), _class.defaultProps = {
  scale: '1.0',
  laptopPos: '0px, 40px',
  tabletPos: '380px, 130px',
  phonePos: '800px, 110px'
}, _temp);


var Root = _styledComponents2.default.div(_templateObject);

var RootInner = _styledComponents2.default.div(_templateObject2, function (p) {
  return p.scale;
});

var Device2 = (0, _styledComponents2.default)(_Device2.default)(_templateObject3, function (p) {
  return p.pos;
}, function (p) {
  return p.pos;
}, function (p) {
  return p.pos;
});

exports.default = DeviceViewer;