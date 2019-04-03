const webpack = require('webpack');
const path = require('path');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
  mode: 'development',
  devtool: '#eval-source-map',
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/client/index.js',
  ],
  output: {
    path: path.join(__dirname, 'static/js'),
    chunkFilename: '[name].js',
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ReactLoadablePlugin({
      filename: 'static/js/react-loadable.json',
    }),
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      request: 'browser-request',
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
