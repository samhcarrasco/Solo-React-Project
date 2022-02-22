const path = require('path');
 const HWP = require('html-webpack-plugin');
 module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')},
    module:{
        rules:[
            {
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'babel-loader'
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
              },
              { test: /\.(png|jpg)$/, use: 'url-loader?limit=8192' }
             
        ],
    },
    plugins:[
        new HWP(
           {template: path.join(__dirname,'/src/index.html')}
        )
    ],
   
 }