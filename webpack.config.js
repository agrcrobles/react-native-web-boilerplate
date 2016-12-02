const path = require('path')
const webpack = require('webpack')

const EXAMPLES_DIRECTORY = __dirname

module.exports = {
  devServer: {
    contentBase: EXAMPLES_DIRECTORY,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: 3000
  },
  devtool: 'source-map',
  entry: [
 		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
    EXAMPLES_DIRECTORY
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
}
