const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'GBlogsite',
      hash: true,
      favicon: "./src/images/favicon.png",
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
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