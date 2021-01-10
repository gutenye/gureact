'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUpdateViaRecord = undefined;

var _lodash = require('lodash');

var _recompose = require('recompose');

// <Input record name />
var addUpdateViaRecord = exports.addUpdateViaRecord = (0, _recompose.compose)((0, _recompose.withState)('value', 'setValue', function (props) {
  return props.record[props.name];
}), (0, _recompose.withProps)(function (props) {
  return {
    onChange: function onChange(value) {
      (0, _lodash.set)(props.record, props.name, value);
      if (props.onChange) props.onChange(value);
      props.setValue(value);
    }
  };
}), (0, _recompose.lifecycle)({
  componentWillReceiveProps: function componentWillReceiveProps(next) {
    this.setState({ value: next.record[next.name] });
  }
}));