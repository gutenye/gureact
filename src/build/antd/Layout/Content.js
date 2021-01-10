'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = exports.Right = exports.Left = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Left = exports.Left = _styledComponents2.default.div.withConfig({
  displayName: 'Content__Left',
  componentId: 'sc-98yflp-0'
})(['']);
var Right = exports.Right = _styledComponents2.default.div.withConfig({
  displayName: 'Content__Right',
  componentId: 'sc-98yflp-1'
})(['']);

var Content = exports.Content = _styledComponents2.default.div.withConfig({
  displayName: 'Content',
  componentId: 'sc-98yflp-2'
})(['background-color:white;margin-top:24px;padding:24px;border-radius:3px;box-shadow:0 2px 4px rgba(0,0,0,0.1);', '{display:flex;', '{width:70%;padding-right:2rem;}', '{width:30%;}}', '{margin-left:24px;margin-right:24px;}'], _theme2.default.tabletMin, Left, Right, _theme2.default.desktopMin);

Content.Left = Left;
Content.Right = Right;