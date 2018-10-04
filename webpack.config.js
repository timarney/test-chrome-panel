const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const title = "App Context";

module.exports = ({ mode }) => {
  return {
    entry: "./src/panel.js",
    mode: mode,
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    plugins: [
      new CleanWebpackPlugin("dist", {}),
      new MiniCssExtractPlugin({
        filename: "style.min.css"
      }),
      new CopyWebpackPlugin([
        {
          from: "src",
          to: "./",
          ignore: ["panel.js", "style.css", "template/*", "sample/*"]
        }
      ]),
      new HtmlWebpackPlugin({
        title,
        template: "src/template/panel.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },
        {
          test: /\.css/,
          use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    }
  };
};
