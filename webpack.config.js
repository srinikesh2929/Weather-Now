const path = require('path');
module.exports = {
    entry: './public/script.js',
    output: {
        filename: 'index.js',
        path:path.resolve(__dirname, './public')
    },
    mode:'production'
}