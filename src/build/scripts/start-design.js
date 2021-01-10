'use strict';

process.env.NODE_ENV !== 'production' && require('babel-register');
require('pdjs');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var path = require('path');
var config = require('react-scripts/config/webpack.config.dev');
var createDevServerConfig = require('react-scripts/config/webpackDevServer.config');
var override = require(process.cwd() + '/config-overrides.js');

config = override(config, 'development');
config.resolve.extensions.unshift('.design.js', '.design.tsx');

var PORT = parseInt(process.env.PORT, 10) || 3000;
var HOST = process.env.HOST || '0.0.0.0';

var proxy = {};
var host = '0.0.0.0';
var serverConfig = createDevServerConfig(proxy, host);

new webpackDevServer(webpack(config), serverConfig).listen(PORT, HOST, function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://' + HOST + ':' + PORT);
});