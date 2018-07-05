const path = require('path');

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
  }
};