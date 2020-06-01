const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
      rules: 
       [
          {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: 
            {
              loader: 'babel-loader',
              options: 
              {
                // @ sign is important!!
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // order matters here..
              // you need style and css before you can access sass
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
          { test: /\.css$/, use: 'css-loader' },
          {
            test: /\.(png|jpe?g|gif|jp2|webp)$/,
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
        ]
      },
    devServer: {
      publicPath: '/build/',
      proxy: {
        // optional to place stars /api/**
        '/api': 'http://localhost:3000'
      }
    },
 // so you don't have to place .js or .jsx at the end of your import/export files   
    resolve: {
      extensions: [".js", ".jsx"]
    }
// for windows users to read process.env
    // plugins: [
    //   new webpack.DefinePlugin({
    //     'process.env' : {
    //       NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    //     }
    //   })
    // ]
};