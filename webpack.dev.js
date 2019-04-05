const webpack = require('webpack');
const path = require('path');
const reactLoadablePlugin = require('react-loadable/webpack')
  .ReactLoadablePlugin;

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
    path: path.resolve(__dirname, 'static'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new reactLoadablePlugin({
      filename: './static/react-loadable.json',
    }),
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      request: 'browser-request',
      'react-dom': '@hot-loader/react-dom',
    },
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
