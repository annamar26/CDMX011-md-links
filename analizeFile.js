const { readFileSync } = require('fs')



function analizeFile(ruta) {

    const bf = readFileSync(ruta);


    const str = bf.toString()

    const arrayResult = []
    const lineas = str.split('\n');
    for (const linea of lineas) {
        if (linea.includes('(') && linea.includes(')')) {
            const brackets = linea.substring(linea.indexOf('(') + 1, linea.indexOf(')'))


            const re = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/
            if (re.test(brackets)) {
                const linkName = linea.substring(linea.indexOf('[') + 1, linea.indexOf(']'))


                arrayResult.push({ "href": brackets.slice(re), "file": ruta, "text": linkName, "line": lineas.indexOf(linea) })



            }
        }

    }
    return arrayResult



};

module.exports = analizeFile