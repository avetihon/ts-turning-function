'use strict';

const webpack = require('webpack');

module.exports = {
    entry: {
        'app': './public/turning-function/Main.ts'
    },
    output: {
        filename: './build/[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options: { configFileName: 'develop.tsconfig.json' }
            }
        ],
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};
