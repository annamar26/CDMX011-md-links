const path = require('path')

function isAbsolute(route) {


    if (path.isAbsolute(route)) {
        return route
    } else {
        const absPath = path.resolve(path.dirname(route))
        return absPath

    }


}
module.exports = isAbsolute