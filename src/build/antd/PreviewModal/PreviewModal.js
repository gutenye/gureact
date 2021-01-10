'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  .PreviewModal {\n    .ant-modal-body {\n      padding: 0;\n      img {\n        vertical-align: bottom;\n      }\n    }\n  }\n'], ['\n  .PreviewModal {\n    .ant-modal-body {\n      padding: 0;\n      img {\n        vertical-align: bottom;\n      }\n    }\n  }\n']);

require('antd/lib/modal/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

// PreviewModal: without padding and footer
//
// <PreviewModal width visible onCancel />
//   <img />
// <PreviewModal>
//

var PreviewModal = function (_React$Component) {
  _inherits(PreviewModal, _React$Component);

  function PreviewModal() {
    _classCallCheck(this, PreviewModal);

    return _possibleConstructorReturn(this, (PreviewModal.__proto__ || Object.getPrototypeOf(PreviewModal)).apply(this, arguments));
  }

  _createClass(PreviewModal, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _modal2.default,
        _extends({ className: 'PreviewModal', footer: null }, this.props),
        this.props.children
      );
    }
  }]);

  return PreviewModal;
}(_react2.default.Component);

exports.default = PreviewModal;