const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    accordion: './docs/_javascript/AccordionPreview.jsx',
    alert: './docs/_javascript/AlertPreview.jsx',
    button: './docs/_javascript/ButtonPreview.jsx',
    checkbox: './docs/_javascript/CheckboxPreview.jsx',
    dropdown: './docs/_javascript/DropdownPreview.jsx',
    modal: './docs/_javascript/ModalPreview.jsx',
    progress: './docs/_javascript/ProgressPreview.jsx',
    radiobutton: './docs/_javascript/RadioButtonPreview.jsx',
    sortablelist: './docs/_javascript/SortableListPreview.jsx',
    tab: './docs/_javascript/TabPreview.jsx',
    textfield: './docs/_javascript/TextFieldPreview.jsx',
    toggle: './docs/_javascript/TogglePreview.jsx'
  },
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
    filename: '[name].preview.js'
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