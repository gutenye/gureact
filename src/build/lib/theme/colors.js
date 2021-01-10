'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textIconOnBackground = exports.textDisabledOnBackground = exports.textHitOnBackground = exports.textSecondaryOnBackground = exports.textPrimaryOnBackground = exports.textIconOnSecondary = exports.textDisabledOnSecondary = exports.textHitOnSecondary = exports.textSecondaryOnSecondary = exports.textPrimaryOnSecondary = exports.textIconOnPrimary = exports.textDisabledOnPrimary = exports.textHitOnPrimary = exports.textSecondaryOnPrimary = exports.textPrimaryOnPrimary = exports.background = exports.secondaryDark = exports.secondaryLight = exports.secondary = exports.primaryDark = exports.primaryLight = exports.primary = undefined;

var _utils = require('./utils');

var primary = exports.primary = '#3a5795'; // Blue
var primaryLight = exports.primaryLight = '#6d85ca';
var primaryDark = exports.primaryDark = '#00306a';
var secondary = exports.secondary = '#33bb55'; // Green
var secondaryLight = exports.secondaryLight = '#6eee84';
var secondaryDark = exports.secondaryDark = '#008a28';
var background = exports.background = '#fff'; // White

var textPrimaryOnPrimary = exports.textPrimaryOnPrimary = _utils.textColors['light']['primary'];
var textSecondaryOnPrimary = exports.textSecondaryOnPrimary = _utils.textColors['light']['secondary'];
var textHitOnPrimary = exports.textHitOnPrimary = _utils.textColors['light']['hit'];
var textDisabledOnPrimary = exports.textDisabledOnPrimary = _utils.textColors['light']['disabled'];
var textIconOnPrimary = exports.textIconOnPrimary = _utils.textColors['light']['icon'];

var textPrimaryOnSecondary = exports.textPrimaryOnSecondary = _utils.textColors['light']['primary'];
var textSecondaryOnSecondary = exports.textSecondaryOnSecondary = _utils.textColors['light']['secondary'];
var textHitOnSecondary = exports.textHitOnSecondary = _utils.textColors['light']['hit'];
var textDisabledOnSecondary = exports.textDisabledOnSecondary = _utils.textColors['light']['disabled'];
var textIconOnSecondary = exports.textIconOnSecondary = _utils.textColors['light']['icon'];

var textPrimaryOnBackground = exports.textPrimaryOnBackground = _utils.textColors['dark']['primary'];
var textSecondaryOnBackground = exports.textSecondaryOnBackground = _utils.textColors['dark']['secondary'];
var textHitOnBackground = exports.textHitOnBackground = _utils.textColors['dark']['hit'];
var textDisabledOnBackground = exports.textDisabledOnBackground = _utils.textColors['dark']['disabled'];
var textIconOnBackground = exports.textIconOnBackground = _utils.textColors['dark']['icon'];