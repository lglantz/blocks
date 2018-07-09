const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './docs/_javascript/preview.jsx',
  module: {
    rules: [{
      test: /\.jsx$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
        },
      },
    }],
  },
  output: {
    path: path.resolve(__dirname, '../docs/lib/'),
    filename: 'preview.js'
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        ie8: false,
        output: {
          comments: false,
          beautify: false
        }
      }
    })
  ]
};