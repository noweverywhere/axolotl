var path = require('path')
module.exports = {
  entry: {
    app: ['./app/index.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-0'] }
        }]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }
}
