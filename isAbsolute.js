const path = require('path')
const process = require('process')

function isAbsolute(route) {


    if (path.isAbsolute(route)) {
        return route
    } else {
        const absPath = path.resolve(process.cwd(), route)
        return absPath

    }


}
module.exports = isAbsolute