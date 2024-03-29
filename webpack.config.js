const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // Some change here
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }

};

