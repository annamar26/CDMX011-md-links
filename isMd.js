const isAbsolute = require('./isAbsolute.js');
const path = require('path')
const search = require('./searchRute.js')

function mdFiles(array) {

    var EXTENSION = '.md';

    console.log(array.filter(function(file) {
        return path.extname(file.route).toLowerCase() === EXTENSION;
    }))

}
mdFiles(search(process.argv[2]))