const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: 'assemblyscript-typescript-loader',
        options: {
          sourceMap: true
        }
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    progress: true,
    quiet: true,
    open: true,
    // outputPath: config.build.assetsRoot,
    host: 'localhost',
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}