import * as path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
    entry: './src/index.ts',

    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                type: 'asset/inline'
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

export default config;

