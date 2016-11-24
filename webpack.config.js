module.exports = {
  entry: './index',

  output: {
    path: `${__dirname}/.build`,
    filename: 'app.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, use: [{loader: 'babel-loader'}], exclude: /node_modules/ },
    ]
  },

  devServer: {
    port: 3003,
    host: '0.0.0.0',
    historyApiFallback: true,
  },

  devtool: 'cheap-module-eval-source-map',
}
