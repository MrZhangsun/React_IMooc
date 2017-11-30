/*引用相关的webpack包*/
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + "/src",
    /*入口文件路径*/
    entry: "./js/root.js",
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    /*打包输出配置*/
    output: {
        path: __dirname + "/src/js/",
        filename: "bundle.js"
    }
};
