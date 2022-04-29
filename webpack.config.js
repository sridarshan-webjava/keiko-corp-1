const path = require("path");

module.exports = {
  mode: "development",
  entry: "./js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
  watch: true,
};
