const paths = require('./paths');
const common = require('./webpack.common.js')



module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  plugins: [
  ],
  output: {
    filename: '[name].bundle.js',
    path: paths.build,
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