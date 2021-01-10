'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Device = require('./Device');

var _Device2 = _interopRequireDefault(_Device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// laptop: 683x400 tablet: 612x360 phone: 180x300
// laptopPos='0px, 40px'
// tabletPos='180px, 230px'
// phonePos='600px, 210px'

var DeviceViewer = function (_React$Component) {
  _inherits(DeviceViewer, _React$Component);

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
        RootInner,
        { scale: scale },
        _react2.default.createElement(DeviceStyled, { device: 'laptop', pos: laptopPos, src: src }),
        _react2.default.createElement(DeviceStyled, { device: 'tablet', landscape: true, pos: tabletPos, src: src }),
        _react2.default.createElement(DeviceStyled, { device: 'phone', pos: phonePos, src: src })
      );
    }
  }]);

  return DeviceViewer;
}(_react2.default.Component);

DeviceViewer.defaultProps = {
  scale: '1.0',
  laptopPos: '0px, 40px',
  tabletPos: '380px, 130px',
  phonePos: '800px, 110px'
};


var Root = _styledComponents2.default.div.withConfig({
  displayName: 'DeviceViewer__Root',
  componentId: 'sc-1xt9v7b-0'
})(['display:flex;align-items:center;justify-content:center;']);

var RootInner = _styledComponents2.default.div.withConfig({
  displayName: 'DeviceViewer__RootInner',
  componentId: 'sc-1xt9v7b-1'
})(['width:1000px;height:600px;margin-left:32px;transform:scale(', ');@media (max-width:1024px){width:500px;height:300px;margin-left:-64px;transform-origin:0 0;transform:scale(0.6);}@media (max-width:600px){width:250px;height:150px;margin-left:-80px;transform-origin:0 0;transform:scale(0.35);}'], function (p) {
  return p.scale;
});

var DeviceStyled = (0, _styledComponents2.default)(_Device2.default).withConfig({
  displayName: 'DeviceViewer__DeviceStyled',
  componentId: 'sc-1xt9v7b-2'
})(['position:absolute;transform-origin:left top;&.laptop{transform:translate3d(', ',0) scale(0.5);}&.tablet{transform:translate3d(', ',0) scale(0.5);}&.phone{transform:translate3d(', ',0) scale(0.5);}'], function (p) {
  return p.pos;
}, function (p) {
  return p.pos;
}, function (p) {
  return p.pos;
});

exports.default = DeviceViewer;