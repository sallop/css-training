var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      //{
      //  test: /\.css/,
      //  use: ExtractTextPlugin.extract({
      //    fallback: "style-loader",
      //    use: "css-loader"
      //  })
      //}
      //{ test: /\.css$/, use: [
      //    { loader: 'style-loader'},
      //    { loader: 'css-loader',
      //      options: { modules: true }
      //    }
      //  ]
      //}
      { test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  //plugins: [new HtmlWebpackPlugin({
  //  filename: 'index.html',
  //  template: './index.html',
  //  inject: 'body',
  //})]
  plugins: [
    new ExtractTextPlugin("styles.css"), // generate to dist/ directory
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: 'body',
    })
  ],
  devServer: {
    contentBase: "./dist"
  }
};
