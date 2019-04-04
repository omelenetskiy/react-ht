const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', './src/client/index.js'],
  output: {
    path: path.resolve(__dirname, 'static/js'),
    chunkFilename: '[name].js',
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
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
