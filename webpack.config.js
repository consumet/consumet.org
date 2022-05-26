const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const srcPath = path.join(__dirname, 'assets/scss');
const dstPath = path.join(__dirname, 'dst');

const sassLoaders = [
  'css-loader?minimize',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + srcPath,
];

module.exports = {
  entry: {
    client: './src/js/client',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          sassLoaders.join('!')
        ),
      },
    ],
  },
  output: {
    path: dstPath,
    filename: '[name].js',
  },
  plugins: [new ExtractTextPlugin('[name].min.css')],
};
