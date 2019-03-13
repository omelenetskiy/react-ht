import webpack from "webpack";
import path from "path";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const CSSModuleLoader = {
  loader: "css-loader",
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: "[local]__[hash:base64:5]"
  }
};

export default {
  mode: process.env.NODE_ENV,
  devtool: "#eval-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    "./src/client/index.js"
  ],
  output: {
    path: path.join(__dirname, "static"),
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
      request: "browser-request"
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
        use: ["style-loader", "css-loader", "sass-loader"]
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
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  }
};
