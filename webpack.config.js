const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  mode: 'production',
  output: {
    libraryTarget: "umd",
    filename: '[name].js',
    path: path.resolve('bin')
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve('src')
        ],
        loader: 'babel-loader'
      }
    ]
  }
}
