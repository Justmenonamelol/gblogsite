const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");




// !!! svg duplicates, Images/fonts


module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/javascript/print.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'GBlogsite',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     // {from: "source", to: "dest"}
    //     {}
    //   ]
    // })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
    //css
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    //images
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        exclude: [
          /node_modules/
        ],
        type: 'asset/resource',
      },
    //fonts 
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
          }
        }] 
       
      },
    //data (csv|tsv; toml, yaml, json5)
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    //
    ],
  }, 
};