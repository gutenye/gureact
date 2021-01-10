'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _upload = require('@navjobs/upload');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <UploadFileWithThumb
//  value=null | file, onChange(file), onLoad(img), onLoadedMetadata(video)
//  ---
//  placeholder: 'Upload'
//  accept: '.jpg,.png,.mov'
//  className style width

var UploadFieldWithThumb = function (_React$Component) {
  _inherits(UploadFieldWithThumb, _React$Component);

  function UploadFieldWithThumb() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UploadFieldWithThumb);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UploadFieldWithThumb.__proto__ || Object.getPrototypeOf(UploadFieldWithThumb)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mediaUrl: null,
      mediaType: null
    }, _this.onFiles = function (files) {
      var file = files[0];
      _this.props.onChange(file);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UploadFieldWithThumb, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          accept = _props.accept,
          placeholder = _props.placeholder,
          className = _props.className,
          style = _props.style,
          width = _props.width;
      var _state = this.state,
          mediaUrl = _state.mediaUrl,
          mediaType = _state.mediaType;

      var field = void 0;
      if (mediaUrl && mediaType === 'image') field = _react2.default.createElement('img', {
        src: mediaUrl,
        onLoad: function onLoad(e) {
          URL.revokeObjectURL(mediaUrl);
          _this2.props.onLoad(e.target);
        }
      });else if (mediaUrl && mediaType === 'video') field = _react2.default.createElement('video', {
        src: mediaUrl,
        ref: function ref(v) {
          return _this2.videoEl = v;
        },
        controls: true,
        onLoadedMetadata: function onLoadedMetadata(e) {
          URL.revokeObjectURL(mediaUrl);
          _this2.props.onLoadedMetadata(e.target);
        }
      });else field = _react2.default.createElement(
        'div',
        { className: 'placeholder' },
        placeholder
      );

      return _react2.default.createElement(
        Root,
        { className: className, style: style, width: width },
        _react2.default.createElement(
          _upload.UploadField,
          { onFiles: this.onFiles, uploadProps: { accept: accept } },
          field
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setImageUrlFromValue(this.props.value);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.setImageUrlFromValue(nextProps.value);
      }
    }
  }, {
    key: 'setImageUrlFromValue',
    value: function setImageUrlFromValue(value) {
      if (value instanceof File) {
        var _mediaType = value.type.split('/')[0];
        var _mediaUrl = URL.createObjectURL(value);
        this.setState({ mediaUrl: _mediaUrl, mediaType: _mediaType });
      }
    }
  }]);

  return UploadFieldWithThumb;
}(_react2.default.Component);

UploadFieldWithThumb.defaultProps = {
  className: '',
  placeholder: 'Upload',
  onChange: function onChange() {},
  onLoadedMetadata: function onLoadedMetadata() {},
  onLoad: function onLoad() {}
};


var Root = _styledComponents2.default.div.withConfig({
  displayName: 'UploadFieldWithThumb__Root',
  componentId: 'il6gcw-0'
})(['width:', ';& > div{width:100%;height:100%;}.placeholder{width:100%;height:', ';display:flex;justify-content:center;align-items:center;color:', ';border:1px solid ', ';cursor:pointer;}'], function (p) {
  return p.width ? p.width + 'px' : '100%';
}, function (p) {
  return p.width ? p.width + 'px' : '100%';
}, function (p) {
  return p.theme.textDisabledOnBackground;
}, function (p) {
  return p.theme.textDisabledOnBackground;
});

exports.default = UploadFieldWithThumb;