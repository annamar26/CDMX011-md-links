const fs = require('fs')
const path = require('path');
const process = require('process')
const isAbsolute = require('./isAbsolute.js')








let arrayResult = []

function search(givenpath) {



    if (fs.statSync(givenpath).isDirectory()) {
        const list = fs.readdirSync(givenpath)
        list.forEach(file => {
            if (fs.statSync(path.join(givenpath, file)).isDirectory()) {
                search(path.join(givenpath, file))
            } else if (path.extname(path.join(givenpath, file)) === '.md') { arrayResult.push(path.join(givenpath, file)) }
        })

    } else if (fs.statSync(givenpath).isFile()) {

        if (path.extname(path.resolve(givenpath)) === '.md' | '.markdow') { arrayResult.push(path.resolve(givenpath)) }

    }




    return (arrayResult)

}


module.exports = search