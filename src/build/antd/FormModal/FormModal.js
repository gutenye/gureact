'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

require('antd/lib/modal/style/css');

require('antd/lib/button/style/css');

require('antd/lib/form/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Inputs = require('../Inputs/Inputs');

var _Inputs2 = _interopRequireDefault(_Inputs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// FormModal.open({
//   items: [
//     {type: 'input', name: 'name', placeholder, rules: [{required: true}]}
//   ]
//   onSave(values)
var FormModal = (_dec = _form2.default.create(), _dec(_class = function (_React$Component) {
  _inherits(FormModal, _React$Component);

  function FormModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormModal.__proto__ || Object.getPrototypeOf(FormModal)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFields(function (errors, values) {
        if (errors) return;
        // trim whitespace
        _this.props.items.forEach(function (v) {
          values[v.name] = _Inputs2.default[v.type].trim(values[v.name]);
        });
        _this.props.onSave(values);
        _this.props.close();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          close = _props.close,
          items = _props.items,
          form = _props.form;

      return _react2.default.createElement(
        ModalStyled,
        { visible: true, footer: null, onCancel: close },
        _react2.default.createElement(
          _form2.default,
          { style: { marginTop: 30 }, onSubmit: this.onSubmit },
          items.map(function (_ref2) {
            var type = _ref2.type,
                name = _ref2.name,
                rules = _ref2.rules,
                rest = _objectWithoutProperties(_ref2, ['type', 'name', 'rules']);

            var INPUT = _Inputs2.default[type];
            return _react2.default.createElement(
              _form2.default.Item,
              { key: name },
              form.getFieldDecorator(name, { rules: rules || [] })(_react2.default.createElement(INPUT, _extends({ autoComplete: 'off' }, rest)))
            );
          }),
          _react2.default.createElement(
            _form2.default.Item,
            { className: 'actions' },
            _react2.default.createElement(
              _button2.default,
              { onClick: close },
              t.cancel
            ),
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', htmlType: 'submit' },
              t.save
            )
          )
        )
      );
    }
  }]);

  return FormModal;
}(_react2.default.Component)) || _class);


FormModal.open = function (options) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    var unmountResult = _reactDom2.default.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  _reactDom2.default.render(_react2.default.createElement(FormModal, _extends({}, options, { close: close })), div);
};

var ModalStyled = (0, _styledComponents2.default)(_modal2.default).withConfig({
  displayName: 'FormModal__ModalStyled',
  componentId: 'awhfgh-0'
})(['.actions{display:flex;justify-content:flex-end;}']);

var TRANSLATIONS = {
  en: {
    save: 'Save',
    cancel: 'Cancel'
  },
  zh: {
    save: '保存',
    cancel: '取消'
  }
};
var t = TRANSLATIONS[window.locale];

exports.default = FormModal;