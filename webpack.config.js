var webpack = require('webpack')
    ,WebpackStrip = require('webpack-strip')
    ,ExtractTextPlugin = require("extract-text-webpack-plugin");


var config = {
    entry: {
        main: './app-content/main/index.js'
    },
    output: {
        path: './public/assets',
        filename: "[name].bundle.js",
        publicPath: '/assets/',
        chunkFilename: '/assets/[id].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader', query: { compact: true } },
                    WebpackStrip.loader('console.log')
                ]
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: 'css-loader', query: { modules: false, sourceMaps: false, minimize: true } }
                    ]
                })
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: 'css-loader', query: { modules: false, sourceMaps: false, minimize: true } },
                        { loader: 'sass-loader', query: { sourceMaps: false } }
                    ]
                })
            }, {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loader: "file-loader?name=/img/[name].[ext]",
                exclude: /node_modules/
            }, {
                test: /\.(mp4)$/i,
                loader: "file-loader?name=/videos/[name].[ext]",
                exclude: /node_modules/
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader" 
            }, {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            sourceMap: false,
            comments: false
        }),
        new ExtractTextPlugin("[name].css")
    ],
    cache: false
};

module.exports = config;