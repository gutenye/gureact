process.env.NODE_ENV !== 'production' && require('babel-register')
require('pdjs')

process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const path = require('path')
const config = require('@gutenye/react-scripts/config/webpack.config.dev')
const createDevServerConfig = require('@gutenye/react-scripts/config/webpackDevServer.config')

config.entry[config.entry.length-1] = path.join(process.cwd(), 'src/index.design')

const PORT = parseInt(process.env.PORT, 10) || 3000
const HOST = process.env.HOST || '0.0.0.0'

const proxy = {}
const public = '0.0.0.0'
const serverConfig = createDevServerConfig(proxy, public)

new webpackDevServer(webpack(config), serverConfig).listen(PORT, HOST, (err, result) => {
  if (err) {
    return console.log(err)
  }
  console.log(`Listening at http://${HOST}:${PORT}`)
})
