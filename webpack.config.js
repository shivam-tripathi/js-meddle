var webpack = require("webpack");

module.exports = {
    entry: __dirname + "/src/client/js/client.js",
    output: {
         path: __dirname + "/lib/client/js",
         filename: "bundle.js",
         sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: __dirname + "/src/client/js",
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: __dirname + "/src/client/css",
                use: ['style-loader','css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true,
        warnings: false,
        mangle: true })
    ]
}
