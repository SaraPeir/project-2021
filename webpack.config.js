const HtmlWebPackPlugin = require("html-webpack-plugin");
// HtmlWebPackPlugin in order to get your React app and webpack to work together,

const {LoaderOptionsPlugin} = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin');
// mini-css-extract-plugin creates CSS files apart and link them in the HTML file. CSS file load at the same time and there is no FOUC.
// Instead, loaders like style-loader and css-loader pre-process the stylesheets and embed them into the output JavaScript bundle, instead of the HTML file, causing FOUC.

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';


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
  watch: true,
  plugins: [htmlPlugin, loaderOptionPlugin, new miniCssExtractPlugin(), new BundleAnalyzerPlugin()],
  devServer: {
    port: 3000,
    watchContentBase: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "node_vendors", //custom name for vendor which includes everything coming from node modules
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        }
      }
    }
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
        use: [devMode ? 'style-loader' : miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        // I cannot use style-loader and miniCssExtractPlugin loader in the same time, otherwise I get the error:
        // ReferenceError: document is not defined at insertStyleElement 
        // (https://github.com/webpack-contrib/style-loader/issues/439#issuecomment-566946315)
        // Do not use style laoder and mini-css-extract-plugin loader together: https://www.npmjs.com/package/mini-css-extract-plugin
      },
    ]
  }
};