const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')
const port = process.env.PORT || 3000

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/public/index.html",
      filename: "./index.html"
    })
  ],
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: port,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}