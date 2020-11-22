const paths = require('./paths');
const common = require('./webpack.common.js')
const webpack = require('webpack')





// !!! svg duplicates, Images/fonts


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/javascript/print.js',
  },
  // Control how source maps are generated
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
  ],
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
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
          }
        }] 
       
      },
    //
    ],
  }, 
};