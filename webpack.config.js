const HtmlWebPackPlugin = require("html-webpack-plugin");
const {LoaderOptionsPlugin} = require('webpack')
// HtmlWebPackPlugin in order to get your React app and webpack to work together,
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./index.html"
});

const loaderOptionPlugin = new LoaderOptionsPlugin({
  minimize: false,
  debug: true,
})

module.exports = {
  entry: "./src/index.js",
  output: { 
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  devtool: 'source-map',
  plugins: [htmlPlugin, loaderOptionPlugin],
  devServer: {
    port: 3000,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s(c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  }
};