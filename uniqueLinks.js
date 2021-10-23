const analizeFileTwo = require("./analizeFile2");
const search = require("./searchRute");
const isAbsolute = require('./isAbsolute.js')

const result = [];

function unique(array) {
    let obj = {}

    for (const element of array) {
        result.push(element.href)
    }


    const unique = result.filter((item, index) => {
        return result.indexOf(item) === index
    }).length
    const total = result.length
    obj = {
        Unique: unique,
        Total: total
    }

    return obj

}

module.exports = unique