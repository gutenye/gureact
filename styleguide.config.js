const Copy = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  title: 'Styleguide',
  styleguideDir: 'public',
  assetsDir: 'static',
  require: ['./src/styleguidist.css'],

  sections: [
    {name: 'Core', content: 'src/core/core.md', components: 'src/core/**/[A-Z]*.js'},
    {name: 'MDC', content: 'src/mdc/mdc.md', components: 'src/mdc/**/[A-Z]*.js'},
    {name: 'Commerce', content: 'src/commerce/commerce.md', components: 'src/commerce/**/[A-Z]*.js'},
    {name: 'Antd', content: 'src/antd/antd.md', components: 'src/antd/**/[A-Z]*.js'},
  ],

  webpackConfig: {
    module: {
      rules: [
        {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
        {test: /\.css$/, use: ['style-loader', 'css-loader']},
        {test: /\.scss$/, use: ['style-loader', 'css-loader', {loader: 'sass-loader', options: {
          includePaths: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
        }}]},
        { test: /\.svg$/, use: ['babel-loader', {loader: '@gutenye/react-svg-loader', options: {es5: false, svgo: { pretty: true, plugins: [ { removeStyleElement: true } ] } }}] }
      ]
    },
    plugins: [
      new Copy([{from: 'static'}])
    ]
  }
}
