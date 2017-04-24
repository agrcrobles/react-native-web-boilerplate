const webpack = require('webpack');

const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'build'),
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
    path.join(__dirname, '../index.web.js')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '..', 'index.web.js'),
          path.resolve(__dirname, '..', 'src'),
          path.resolve(__dirname, '../node_modules/react-native-vector-icons'),
          path.resolve(__dirname, '../node_modules/react-native-tab-view')
        ],
        loader: 'babel-loader?+cacheDirectory'
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      },
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
    })
  ],
  resolve: {
    modules: [
      path.join(__dirname, '..', 'node_modules')
    ],
    alias: {
      'react-native': 'react-native-web',
      'react-navigation': 'react-navigation/lib/react-navigation.js',
    }
  }
};
