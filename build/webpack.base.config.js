const path = require('path');

module.exports = {
    entry: {
        app: ['./src/index.js'],
        vendor: [
            'react',
            'react-dom',
            'react-router-dom'
        ]
    },

    output: {
        path: path.join(process.cwd(), 'dist/'),
        filename: '[name].[chunkhash:7].js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|gif)/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[hash:7].[ext]'
                }
            }
        ]
    }
}