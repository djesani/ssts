// const path = require("path");
// const glob = require("glob");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

// const PATHS = {
//   src: path.join(__dirname, "src"),
// };

// module.exports = {
//   // entry: "./src/**/*",
//   // output: {
//   //   filename: "bundle.js",
//   //   path: path.join(__dirname, "dist"),
//   // },
//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         styles: {
//           name: "styles",
//           test: /\.css$/,
//           chunks: "all",
//           enforce: true,
//         },
//       },
//     },
//   },
//   // module: {
//   //   rules: [
//   //     {
//   //       test: /\.css$/,
//   //       use: [MiniCssExtractPlugin.loader, "css-loader"],
//   //     },
//   //   ],
//   // },
//   plugins: [
//     // new MiniCssExtractPlugin({
//     //   filename: "[name].css",
//     // }),
//     new PurgeCSSPlugin({
//       paths: glob.sync(`${PATHS.src}/**/*`, { nodir: fase }),
//     }),
//   ],
// };
