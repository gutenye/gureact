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

var _reactRouterDom = require('react-router-dom');

var _reactMc = require('react-mc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_React$Component) {
  _inherits(Settings, _React$Component);

  function Settings() {
    _classCallCheck(this, Settings);

    return _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).apply(this, arguments));
  }

  _createClass(Settings, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          className = _props.className;

      return _react2.default.createElement(
        Root,
        { className: className },
        items.map(function (group) {
          return [group.title && _react2.default.createElement(
            _reactMc.List.Group.Subheader,
            null,
            group.title
          ), _react2.default.createElement(
            _reactMc.List,
            { avatarList: group.avatar },
            group.items.map(function (subitem, i) {
              var icon = subitem.icon,
                  avatar = subitem.avatar,
                  text = subitem.text,
                  secondaryText = subitem.secondaryText,
                  to = subitem.to,
                  rest = _objectWithoutProperties(subitem, ['icon', 'avatar', 'text', 'secondaryText', 'to']);

              var linkProps = to ? { component: _reactRouterDom.Link, to: to } : {};
              return [_react2.default.createElement(
                _reactMc.List.Item,
                _extends({ key: i }, linkProps, rest),
                group.avatar ? _react2.default.createElement(_reactMc.List.Item.StartDetail, { component: 'img', src: avatar }) : _react2.default.createElement(
                  _reactMc.List.Item.StartDetail,
                  { className: 'material-icons' },
                  icon
                ),
                _react2.default.createElement(
                  _reactMc.List.Item.Text,
                  null,
                  text,
                  secondaryText && _react2.default.createElement(
                    _reactMc.List.Item.Text.Secondary,
                    null,
                    secondaryText
                  )
                ),
                _react2.default.createElement(
                  _reactMc.List.Item.EndDetail,
                  { className: 'material-icons' },
                  'keyboard_arrow_right'
                )
              ), _react2.default.createElement(_reactMc.List.Divider, { inset: true })];
            })
          )];
        })
      );
    }
  }]);

  return Settings;
}(_react2.default.Component);

var Root = (0, _styledComponents2.default)(_reactMc.List.Group).withConfig({
  displayName: 'Settings__Root',
  componentId: 'sc-1je0kn4-0'
})(['padding:0;.mdc-list{border-top:1px solid rgba(0,0,0,0.12);border-bottom:1px solid rgba(0,0,0,0.12);background-color:white;padding:0 0 0 16px;}.mdc-list:not(:last-child){margin-bottom:32px;}.mdc-list-divider:last-child{display:none;}.mdc-list-item__end-detail{color:#c7c7cc;}.mdc-list-group__subheader{color:#8f8f8f;margin:0;padding-left:16px;font-weight:normal;text-transform:uppercase;}']);

exports.default = Settings;