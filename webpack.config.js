const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const modeOption = process.env.NODE_ENV;

module.exports = {
  mode: modeOption || 'development',
  devtool: 'source-map',
  entry: './src/client/index.js',
  output: {
    devtoolLineToLine: true,
    sourceMapFilename: "./bundle.js.map",
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '*']
  }, 
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true,
              localIdentName: '[local]---[hash:base64:5]'
            }
          }
        ]
      }, 
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]'
            }
          }
        ]
      }
    ]
  },
  plugins: modeOption === 'development' ? [new LiveReloadPlugin({appendScriptTag: true})] : []
};
