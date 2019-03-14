import webpack from "webpack";
import path from "path";
import autoprefixer from "autoprefixer";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  mode: process.env.NODE_ENV,
  devtool: "#eval-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    "./src/client/index.js"
  ],
  output: {
    path: path.join(__dirname, "static/js"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: [".js"],
    alias: {
      request: "browser-request",
      "react-dom": "@hot-loader/react-dom"
    }
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, "src"),
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "isomorphic-style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
            options: {
              data: '@import "./src/client/scss/vars.scss";'
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: () => [
                autoprefixer({
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9"
                  ]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  }
};
