const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',
  devServer: {
    watchOptions: {
      ignored: /node_modules/
    }
  }
};