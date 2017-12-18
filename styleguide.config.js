const path = require('path')
const Copy = require('copy-webpack-plugin')
const Compression = require('compression-webpack-plugin')

// in seperator docs directory, for needs single react dependency.

module.exports = {
  title: 'gureact docs',
  styleguideDir: 'build.docs',
  assetsDir: 'static',
  template: './src/styleguide.html',
  require: ['./src/styleguide.js', './src/styleguide.css'],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguideWrapper'),
  },
  serverPort: 6007,

  // prettier-ignore
  sections: [
    { name: 'Styles', content: './src/STYLES.md' },
    { name: 'Core', sections: [
      { name: 'BottomNavigation', content: './src/core/BottomNavigation/README.md', components: './src/core/BottomNavigation/[A-Z]*.js' }
    ]},
    { name: 'MDC', sections: [
      { name: 'Settings', content: './src/mdc/Settings/README.md', components: './src/mdc/Settings/[A-Z]*.js' },
    ]},
    { name: 'Commerce', sections:  [
      { name: 'StockQtyEdit', content: './src/commerce/StockQtyEdit/README.md', components: './src/commerce/StockQtyEdit/[A-Z]*.js' },
      { name: 'GridListItem', content: './src/commerce/GridListItem/README.md', components: './src/commerce/GridListItem/[A-Z]*.js' },
    ]},
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
        },
      },
    },
  },

  webpackConfig: {
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, 'src'),
                  path.resolve(__dirname, 'node_modules'),
                ],
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            'babel-loader',
            {
              loader: '@gutenye/react-svg-loader',
              options: {
                es5: false,
                svgo: { pretty: true, plugins: [{ removeStyleElement: true }] },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new Compression(),
      //new Copy([{from: 'static'}])
    ],
  },
}
