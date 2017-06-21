const Copy = require('copy-webpack-plugin')

module.exports = {
  styleguideDir: 'public',
  assetsDir: 'static',
  require: ['./src/styleguidist.css'],

  title: 'Styleguide',

  sections: [
    {name: 'Core', content: 'src/core/core.md', components: 'src/core/**/[A-Z]*.js'},
    {name: 'Commerce', content: 'src/commerce/commerce.md', components: 'src/commerce/**/[A-Z]*.js'},
    {name: 'Antd', content: 'src/antd/antd.md', components: 'src/antd/**/[A-Z]*.js'},
  ],

  webpackConfig: {
    module: {
      rules: [
        {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
        {test: /\.css$/, use: ['style-loader', 'css-loader']},
      ]
    },
    plugins: [
      new Copy([{from: 'static'}])
    ]
  }
}
