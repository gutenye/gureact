const path = require('path')
const Copy = require('copy-webpack-plugin')
const Compression = require('compression-webpack-plugin')

module.exports = {
  title: 'GuReact',
  styleguideDir: 'build.docs',
  assetsDir: 'static',
  template: 'docs/template.html',
  require: ['./docs/docs.js', './docs/docs.css'],

  // prettier-ignore
  sections: [
    //{name: 'Core', content: 'src/core/core.md', components: 'src/core/**/[A-Z]*.js'},
    { name: 'MDC', sections: [
      { name: 'Settings', content: 'src/mdc/Settings/README.md', components: 'src/mdc/Settings/[A-Z]*.js' },
    ]},
    //{name: 'Commerce', content: 'src/commerce/commerce.md', components: 'src/commerce/**/[A-Z]*.js'},
    //{name: 'Antd', content: 'src/antd/antd.md', components: 'src/antd/**/[A-Z]*.js'},
  ],

  // remove default README.md
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js$/, '.md')
  },

  styles: {
    ComponentsList: {
      heading: {
        '& + ul > $isChild': {
          display: 'none',
        }
      },
    },
  },


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
      new Compression(),
      //new Copy([{from: 'static'}])
    ]
  }
}
