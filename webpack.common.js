const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

require('babel-polyfill');

module.exports = {
  entry: [__dirname + '/src/js/index.ts'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader'},
            { loader: 'sass-loader'}
          ],
        })
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/public/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('main.css')
  ],
  devServer: {
    contentBase: './src/public',
    port: 8000
  }
}
