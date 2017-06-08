module.exports = {
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
    }
  }
}
