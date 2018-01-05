const webpack = require('webpack');

module.exports = {
  watch: false,
  entry: __dirname + '/src/sites/all/themes/ddsports/js/main.js',
  output: {
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    },
    {
      test: /\.js$/, 
      loader: 'imports?define=>false' 
    }]
  },
  devtool: 'source-map', // eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // 'NODE_ENV': JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {}
    // })
  ]
};
