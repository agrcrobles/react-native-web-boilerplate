const path = require('path')
const webpack = require('webpack')

const EXAMPLES_DIRECTORY = __dirname

module.exports = {
  devServer: {
    contentBase: EXAMPLES_DIRECTORY
  },
  entry: {
    example: EXAMPLES_DIRECTORY
  },
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
    new webpack.optimize.DedupePlugin(),
    // https://github.com/animatedjs/animated/issues/40
    new webpack.NormalModuleReplacementPlugin(
      /es6-set/,
      path.join(__dirname, '/node_modules/react-native-web/dist/modules/polyfills/Set.js')
    ),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
}
