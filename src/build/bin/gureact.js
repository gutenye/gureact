#!/usr/bin/env node
'use strict';

var _templateObject = _taggedTemplateLiteral([' on the process.'], [' on the process.']),
    _templateObject2 = _taggedTemplateLiteral(['kill -9'], ['kill -9']),
    _templateObject3 = _taggedTemplateLiteral([', or the system could be shutting down.'], [', or the system could be shutting down.']),
    _templateObject4 = _taggedTemplateLiteral(['killall'], ['killall']),
    _templateObject5 = _taggedTemplateLiteral([' or '], [' or ']),
    _templateObject6 = _taggedTemplateLiteral(['kill'], ['kill']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _require = require('child_process'),
    spawnSync = _require.spawnSync;

var args = process.argv.slice(2);
var script = args[0];

var result = spawnSync('node', [require.resolve('../scripts/' + script)].concat(_toConsumableArray(args.slice(1))), { stdio: 'inherit' });

if (result.signal) {
  if (result.signal === 'SIGKILL') {
    console.log('The build failed because the process exited too early. This probably means the system ran out of memory or someone called '(_templateObject2)(_templateObject));
  } else if (result.signal === 'SIGTERM') {
    console.log('The build failed because the process exited too early. Someone might have called '(_templateObject6)(_templateObject5)(_templateObject4)(_templateObject3));
  }
  process.exit(1);
}

process.exit(result.status);