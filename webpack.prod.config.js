const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src', 'index.js')
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
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
};
