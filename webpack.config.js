const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = env => {
  return {
    entry: "./src/panel.js",
    mode: env.mode,
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    plugins: [
      new CopyWebpackPlugin([{ from: "src", to: "./", ignore: "panel.js" }])
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
        }
      ]
    }
  };
};
