const path = require('path')

module.exports = {
    entry:  './src/components/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:['babel-loader']
            }
        ]
    },
    devServer:{
        contentBase: './'
    }
}