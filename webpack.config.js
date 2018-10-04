const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
      new CopyWebpackPlugin([
        { from: "src", to: "./", ignore: ["panel.js", "template/*"] }
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
          loader: "style-loader!css-loader"
        }
      ]
    }
  };
};
