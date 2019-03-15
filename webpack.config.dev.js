import webpack from 'webpack';
import path from 'path';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  mode: process.env.NODE_ENV,
  devtool: '#eval-source-map',
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/client/index.js',
    './src/shared/scss/styles.scss'
  ],
  output: {
    path: path.join(__dirname, 'static/js'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      request: 'browser-request',
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              data: '@import "./src/shared/scss/vars.scss";'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  }
};
