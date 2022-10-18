const path = require('path')

module.exports = {
    entry: './src/index.js', 
    output : {
       path:path.resolve(__dirname , 'dist'),
       filename : 'bundle.js'
       },
   devServer:{
       static: {
               directory: path.join(__dirname, 'dist')
             }
       } ,
   module:{
       rules:[
               {
       test: /\.js$/,
       loader : 'babel-loader',
       exclude: /node_modules/
               },
               {
       test : /\.css$/,
       use: ['style-loader','css-loader']
               },
               {
       test : /\.scss$/,
        use: ['style-loader','css-loader', 'sass-loader']
           
               },
               {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              }
           ]
       }
   }
   