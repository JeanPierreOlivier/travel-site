const path = require('path')
const postCSSPlugins = [
    require ('postcss-simple-vars'),
    require ('postcss-nested'),
    require('auroprefixer')
]

module.exports = {
    entry: './app/assets/scripts/app.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development',
    watch: true,
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', {loader: 'postcc-loader', options: {postccOptions: {plugins:postCSSPlugins}}}]
            }
        ]
    }
}
