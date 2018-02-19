var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  entry:'./src/index.js',
  output:{
    path:__dirname+'/dist',
    filename:'bundle.js'
  },
  plugins:[
    new htmlWebpackPlugin({
      template:'index.html'
    })
  ],
  devServer:{
    inline:true,
    contentBase:'./dist',
    port:3000
  },
  module:{
    loaders:[{
      test:/\.js$/,
      exclude:/node_modules/,
      loader:"babel-loader",
      query:{
        presets:['react','es2015']
      }
    },
    {
      test:/\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test:/\.scss$/,
      loader:'style-loader!css-loader!sass-loader'
    },
    {
      test:/\.json$/,
      loader:'json-loader'
    }
  ]
  }
}
