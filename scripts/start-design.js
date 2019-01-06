process.env.NODE_ENV !== 'production' && require('babel-register')
require('pdjs')

process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const path = require('path')
let config = require('react-scripts/config/webpack.config.dev')
const createDevServerConfig = require('react-scripts/config/webpackDevServer.config')
const override = require(`${process.cwd()}/config-overrides.js`)

config = override(config, 'development')
config.resolve.extensions.unshift('.design.js', '.design.tsx')

const PORT = parseInt(process.env.PORT, 10) || 3000
const HOST = process.env.HOST || '0.0.0.0'

const proxy = {}
const host = '0.0.0.0'
const serverConfig = createDevServerConfig(proxy, host)

new webpackDevServer(webpack(config), serverConfig).listen(
  PORT,
  HOST,
  (err, result) => {
    if (err) {
      return console.log(err)
    }
    console.log(`Listening at http://${HOST}:${PORT}`)
  }
)
