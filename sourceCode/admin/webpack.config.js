// const path = require('path')
// const glob = require('glob')
// const PurgeCSSPlugin = require('purgecss-webpack-plugin')

// const PATHS = {
//   src: path.join(__dirname, 'src')
// }

// module.exports = {
//   entry: './src/index.html',
//   output: {
//     filename: 'bundle.js',
//     path: path.join(__dirname, 'dist')
//   },
//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         styles: {
//           name: 'styles',
//           test: /\.css$/,
//           chunks: 'all',
//           enforce: true
//         }
//       }
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           "css-loader"
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new PurgeCSSPlugin({
//       paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
//     }),
//   ]
// }


// const glob = require('glob');
// const Purgecss = require('purgecss-webpack-plugin');

// module.exports = {
//   plugins: [
//     new Purgecss({
//       paths: () =>
//         glob
//           .sync('./src/**/*', { nodir: true })
//     }),
//   ],
// };

const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.html']
    })
  ]
}