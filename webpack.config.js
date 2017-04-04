var path = require('path')
module.exports = {
  entry: {
    app: ['./app/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }
}
