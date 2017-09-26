'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'app': './public/Main.ts'
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
    }
};
