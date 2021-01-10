'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringQuerier = stringQuerier;
exports.arrayQuerier = arrayQuerier;
exports.numberQuerier = numberQuerier;

var _lodash = require('lodash');

function stringQuerier(obj) {
  obj.parseQuery = function (str) {
    return str;
  };
  obj.toQuery = function (str) {
    return str;
  };
  obj.trim = function (str) {
    return str.trim();
  };
  return obj;
}
function arrayQuerier(obj) {
  obj.parseQuery = function (str) {
    return (0, _lodash.compact)(str.split(','));
  };
  obj.toQuery = function (ary) {
    return ary.join(',');
  };
  obj.trim = function (ary) {
    return ary.map(function (v) {
      return v.trim();
    });
  };
  return obj;
}

function numberQuerier(obj) {
  obj.parseQuery = function (str) {
    return parseInt(str, 10);
  };
  obj.toQuery = function (num) {
    return num;
  };
  obj.trim = function (num) {
    return num;
  };
  return obj;
}