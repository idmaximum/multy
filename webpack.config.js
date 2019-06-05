const path = require('path')

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, './src'),
    entry: {
        'home': './home-app.js',
        'category': './category-app.js',
        'product': './product-app.js',
        'brands': './brands-app.js',
        'profile': './profile-app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './public/bundles'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'stage-2', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
};