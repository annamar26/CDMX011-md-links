const fs = require('fs')
const path = require('path');





function search(givenpath) {

    let ruta = ''


    fs.readdirSync(givenpath).forEach(file => {
        if (fs.lstatSync(path.resolve(givenpath, file)).isDirectory()) {
            search(path.join(givenpath, file))
        } else {
            const ext = path.extname(path.join(givenpath, file))
            if (ext === '.md') {

                ruta = path.join(givenpath, file);




            }
        }
    });

    return ruta



}


module.exports = search