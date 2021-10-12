const process = require('process');
const analizeFile = require('./analizeFile.js');
const search = require('./searchRute.js');
const uniqueLinks = require('./uniqueLinks.js')

let options = process.argv[3];
let file = process.argv[2]

const isAbsolute = require('./isAbsolute.js');


function status(userChoice, options) {
    if (options === '--stats'){
        result = `Links: ${(analizeFile(search(isAbsolute(userChoice)))).length}\nUnique: ${uniqueLinks((analizeFile(search(isAbsolute(userChoice)))))}`
        console.log(result)
    }else if (options == null | options == undefined) {
        console.log(analizeFile(search(isAbsolute(userChoice))))



    }
}

status(file, options)