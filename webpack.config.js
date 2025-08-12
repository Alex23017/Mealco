const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/js/main.js",
    press: "./src/js/press.js",
    products: "./src/js/products.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/js"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "source-map",
};
