'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    Root,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        Primary,
        null,
        'primary'
      ),
      _react2.default.createElement(
        Secondary,
        null,
        'secondary'
      ),
      _react2.default.createElement(
        Background,
        null,
        'background'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        TextPrimaryOnPrimary,
        null,
        'textPrimaryOnPrimary'
      ),
      _react2.default.createElement(
        TextSecondaryOnPrimary,
        null,
        'textSecondaryOnPrimary'
      ),
      _react2.default.createElement(
        TextHitOnPrimary,
        null,
        'textHitOnPrimary'
      ),
      _react2.default.createElement(
        TextDisabledOnPrimary,
        null,
        'textDisabledOnPrimary'
      ),
      _react2.default.createElement(
        TextIconOnPrimary,
        null,
        'textIconOnPrimary'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        TextPrimaryOnSecondary,
        null,
        'textPrimaryOnSecondary'
      ),
      _react2.default.createElement(
        TextSecondaryOnSecondary,
        null,
        'textSecondaryOnSecondary'
      ),
      _react2.default.createElement(
        TextHitOnSecondary,
        null,
        'textHitOnSecondary'
      ),
      _react2.default.createElement(
        TextDisabledOnSecondary,
        null,
        'textDisabledOnSecondary'
      ),
      _react2.default.createElement(
        TextIconOnSecondary,
        null,
        'textIconOnSecondary'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        TextPrimaryOnBackground,
        null,
        'textPrimaryOnBackground'
      ),
      _react2.default.createElement(
        TextSecondaryOnBackground,
        null,
        'textSecondaryOnBackground'
      ),
      _react2.default.createElement(
        TextHitOnBackground,
        null,
        'textHitOnBackground'
      ),
      _react2.default.createElement(
        TextDisabledOnBackground,
        null,
        'textDisabledOnBackground'
      ),
      _react2.default.createElement(
        TextIconOnBackground,
        null,
        'textIconOnBackground'
      )
    )
  );
};

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'STYLES__Root',
  componentId: 'fn2y0x-0'
})(['span{margin-right:5px;}']);
var Primary = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__Primary',
  componentId: 'fn2y0x-1'
})(['color:', ';'], function (p) {
  return p.theme.primary;
});
var Secondary = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__Secondary',
  componentId: 'fn2y0x-2'
})(['color:', ';'], function (p) {
  return p.theme.secondary;
});
var Background = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__Background',
  componentId: 'fn2y0x-3'
})(['color:', ';'], function (p) {
  return p.theme.background;
});

var TextPrimaryOnPrimary = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextPrimaryOnPrimary',
  componentId: 'fn2y0x-4'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.primary;
}, function (p) {
  return p.theme.textPrimaryOnPrimary;
});
var TextSecondaryOnPrimary = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextSecondaryOnPrimary',
  componentId: 'fn2y0x-5'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.primary;
}, function (p) {
  return p.theme.textSecondaryOnPrimary;
});
var TextHitOnPrimary = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextHitOnPrimary',
  componentId: 'fn2y0x-6'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.primary;
}, function (p) {
  return p.theme.textHitOnPrimary;
});
var TextDisabledOnPrimary = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextDisabledOnPrimary',
  componentId: 'fn2y0x-7'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.primary;
}, function (p) {
  return p.theme.textDisabledOnPrimary;
});
var TextIconOnPrimary = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextIconOnPrimary',
  componentId: 'fn2y0x-8'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.primary;
}, function (p) {
  return p.theme.textIconOnPrimary;
});

var TextPrimaryOnSecondary = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextPrimaryOnSecondary',
  componentId: 'fn2y0x-9'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.secondary;
}, function (p) {
  return p.theme.textPrimaryOnSecondary;
});
var TextSecondaryOnSecondary = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextSecondaryOnSecondary',
  componentId: 'fn2y0x-10'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.secondary;
}, function (p) {
  return p.theme.textSecondaryOnSecondary;
});
var TextHitOnSecondary = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextHitOnSecondary',
  componentId: 'fn2y0x-11'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.secondary;
}, function (p) {
  return p.theme.textHitOnSecondary;
});
var TextDisabledOnSecondary = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextDisabledOnSecondary',
  componentId: 'fn2y0x-12'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.secondary;
}, function (p) {
  return p.theme.textDisabledOnSecondary;
});
var TextIconOnSecondary = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextIconOnSecondary',
  componentId: 'fn2y0x-13'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.secondary;
}, function (p) {
  return p.theme.textIconOnSecondary;
});

var TextPrimaryOnBackground = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextPrimaryOnBackground',
  componentId: 'fn2y0x-14'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.background;
}, function (p) {
  return p.theme.textPrimaryOnBackground;
});
var TextSecondaryOnBackground = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextSecondaryOnBackground',
  componentId: 'fn2y0x-15'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.background;
}, function (p) {
  return p.theme.textSecondaryOnBackground;
});
var TextHitOnBackground = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextHitOnBackground',
  componentId: 'fn2y0x-16'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.background;
}, function (p) {
  return p.theme.textHitOnBackground;
});
var TextDisabledOnBackground = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextDisabledOnBackground',
  componentId: 'fn2y0x-17'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.background;
}, function (p) {
  return p.theme.textDisabledOnBackground;
});
var TextIconOnBackground = _styledComponents2.default.span.withConfig({
  displayName: 'STYLES__TextIconOnBackground',
  componentId: 'fn2y0x-18'
})(['background-color:', ';color:', ';'], function (p) {
  return p.theme.background;
}, function (p) {
  return p.theme.textIconOnBackground;
});