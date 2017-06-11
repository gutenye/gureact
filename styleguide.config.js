const Copy = require('copy-webpack-plugin')

module.exports = {
  styleguideDir: 'public',
  assetsDir: 'static',

  title: 'Styleguide',

  sections: [
    {name: 'Overview', content: 'src/styleguide.md' },
    {name: 'Components', components: 'src/**/[A-Z]*.js'},
  ],

  webpackConfig: {
    module: {
      rules: [
        {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']}
      ]
    },
    plugins: [
      new Copy([{from: 'static'}])
    ]
  }
}
