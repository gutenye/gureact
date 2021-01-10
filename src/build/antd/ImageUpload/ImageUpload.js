'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/upload/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _create = require('react-icons/lib/md/create');

var _create2 = _interopRequireDefault(_create);

var _visibility = require('react-icons/lib/md/visibility');

var _visibility2 = _interopRequireDefault(_visibility);

var _PreviewModal = require('../PreviewModal/PreviewModal');

var _PreviewModal2 = _interopRequireDefault(_PreviewModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <ImageUpload>
//    value onChange(value)       // value: a.png
//    action: '/upload'
//    children: 'Upload Image'
//    ---
//    baseUrl: ''                 // imageUrl is baseUrl/value
//    valueExtractor(response)    // by default value is response.path
//    name: 'file'*
//    onUpload(info)
//
var ImageUpload = function (_React$Component) {
  _inherits(ImageUpload, _React$Component);

  function ImageUpload() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageUpload);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageUpload.__proto__ || Object.getPrototypeOf(ImageUpload)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isPreviewOpen: false
    }, _this.openPreview = function () {
      _this.setState({ isPreviewOpen: true });
    }, _this.closePreview = function () {
      _this.setState({ isPreviewOpen: false });
    }, _this.openUpload = function () {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageUpload, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          baseUrl = _props.baseUrl;
      var isPreviewOpen = this.state.isPreviewOpen;

      var imageUrl = baseUrl + '/' + value;
      var uploadProps = _extends({}, this.props, {
        showUploadList: false,
        onChange: function onChange(info) {
          if (info.file.status === 'done') {
            _this2.props.onChange(_this2.props.valueExtractor(info.file.response));
          }
          _this2.props.onUpload(info);
        }
      });
      return _react2.default.createElement(
        Root,
        null,
        _react2.default.createElement(
          'div',
          { className: 'upload' },
          value ? _react2.default.createElement(
            'div',
            { className: 'filled' },
            _react2.default.createElement('img', { className: 'thumb', src: imageUrl, alt: '' }),
            _react2.default.createElement(
              'div',
              { className: 'overlay' },
              _react2.default.createElement(_visibility2.default, { onClick: this.openPreview }),
              _react2.default.createElement(
                _upload2.default,
                uploadProps,
                _react2.default.createElement(_create2.default, null)
              )
            )
          ) : _react2.default.createElement(
            _upload2.default,
            _extends({ className: 'empty' }, uploadProps),
            this.props.children
          )
        ),
        _react2.default.createElement(
          _PreviewModal2.default,
          {
            width: '512',
            visible: isPreviewOpen,
            onCancel: this.closePreview
          },
          _react2.default.createElement('img', { src: imageUrl, alt: '' })
        )
      );
    }
  }]);

  return ImageUpload;
}(_react2.default.Component);

ImageUpload.defaultProps = {
  onChange: function onChange() {},
  valueExtractor: function valueExtractor(response) {
    return response.path;
  },
  onUpload: function onUpload() {}
};


var HEIGHT = 240;
var Root = _styledComponents2.default.div.withConfig({
  displayName: 'ImageUpload__Root',
  componentId: 'sc-8apm0b-0'
})(['width:240px;height:', 'px;img{max-width:100%;vertical-align:bottom;}.upload .empty{display:block;border:1px dashed #d9d9d9;border-radius:6px;.ant-upload{width:100%;height:', 'px;cursor:pointer;display:flex;justify-content:center;align-items:center;color:#999;}}.upload .filled{position:relative;.overlay{background:rgba(49,55,61,0.75);position:absolute;top:0;width:100%;height:100%;opacity:0;transition:opacity 0.2s ease-in-out;display:flex;align-items:center;justify-content:space-around;> *{width:30%;height:30%;cursor:pointer;}.ant-upload,.ant-upload .icon{width:100%;height:100%;}}&:hover .overlay{opacity:1;}}'], HEIGHT, HEIGHT);

exports.default = ImageUpload;