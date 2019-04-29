const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'tsaxb.js',
  },
  entry: {
    tsaxb: path.join(__dirname, '/src/XmlBinder.ts')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: []
};
