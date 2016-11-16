module.exports = {
  entry: [
    './src/index.js' //this is file which we create
  ],
  output: {
    path: __dirname,
    filename: 'app/js/main.js'
  },
 devServer: {
    inline: true,
    port: 8080
 },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}