const path = require('path')

module.exports = {
    

    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.css'))
    },

    getJS: (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.js'))
    }
    
}