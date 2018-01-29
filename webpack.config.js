const path = require('path');
const BUILD_DIR = path.resolve('./public');
const APP_DIR = path.resolve('./src');

module.exports = [{
    devServer: {
        inline:true,
        port: 8008
    },
    entry: APP_DIR + "/call.jsx",
    output: {
        path: BUILD_DIR,
        filename: "js/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['latest', 'react']
            }
        }]
    }
}];