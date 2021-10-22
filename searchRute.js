const fs = require('fs')
const path = require('path');



let arrayResult = []

function search(givenpath) {
    const absolute = path.resolve(givenpath);
    let files = [];
    if (fs.lstatSync(path.resolve(givenpath)).isFile() && path.extname(givenpath) == '.md') {
        files = fs.readFileSync(absolute);
    } else {
        files = fs.readdirSync(absolute);
    }


    files.forEach(file => {
        if (fs.lstatSync(path.resolve(givenpath, file)).isFile()) {


            let ruta = { route: path.join(givenpath, file) };
            arrayResult.push(ruta)
        } else {
            search(path.join(givenpath, file));




        }
    })


    return arrayResult



}


module.exports = search