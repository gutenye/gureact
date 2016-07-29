module.exports = {
  entry: "./App",

  output: {
    path: `${__dirname}/dist`,
    filename: "app.js",
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: "babel", include: /App.js|gureact/ },
      //{ test: /\.js$/, loader: "babel", include: /App.js/ },
    ]
  },

  devServer: {
    port: 3003,
    host: "0.0.0.0",
    historyApiFallback: true,
  },

  devtool: "cheap-module-eval-source-map",
}
