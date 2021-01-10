module.exports = {
  entry: './App',

  output: {
    path: `${__dirname}/build`,
    filename: 'app.js',
  },

  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', include: /App.js|gureact/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },

  devServer: {
    port: 3011,
    host: '0.0.0.0',
    historyApiFallback: true,
  },

  devtool: 'cheap-module-eval-source-map',
}
