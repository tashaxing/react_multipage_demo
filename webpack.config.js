var path = require('path');
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        home: __dirname + "/src/index.js",
        page1: __dirname + "/src/page1.js",
        page2: __dirname + "/src/page2.js"
    },
    output: {
        path: path.resolve(__dirname, 'output'), // equal to __diname + '/build'
        filename: 'build/[name].bundle.js',
        chunkFilename: 'build/[id].chunk.js'
    },
    // devtool: 'eval-source-map',
    devServer: {
        inline: true, // hot load
        contentBase: './src',
        port: 3000,   // dev server listen port
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                },
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            { 
                test: /\.(png|jpg|gif)$/, 
                loader: 'url?limit=819200' 
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: "myapp for test"
        // })
        new webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendor', 
            filename: 'build/vendor.bundle.js'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }), // there are promblem working with webpack v3
        new CopyWebpackPlugin([
            {
                from: __dirname + '/src', ignore: '*.js' // copy all the files except js
            }
        ])
    ]
}