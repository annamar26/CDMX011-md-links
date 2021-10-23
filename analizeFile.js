const { readFileSync } = require('fs');




function analizeFile(ruta) {

    const bf = readFileSync(ruta);


    const str = bf.toString()

    const arrayResult = []
    const lineas = str.split('\n');
    for (const linea of lineas) {
        if (linea.includes('(') && linea.includes(')')) {
            const brackets = linea.substring(linea.indexOf('(') + 1, linea.indexOf(')'))


            const re = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/s
            const reg2 = /\www\.[a-zA-Z]{0,80}\.[a-zA-Z]{1,5}/s
            if (re.test(brackets)) {
                const linkName = linea.substring(linea.indexOf('[') + 1, linea.indexOf(']'))


                arrayResult.push({ "href": brackets.slice(re), "file": ruta, "text": linkName, "line": lineas.indexOf(linea) })



            } else if (reg2.test(brackets)) {

                const linkName = linea.substring(linea.indexOf('[') + 1, linea.indexOf(']'))

                arrayResult.push({ "href": brackets.slice(reg2), "file": ruta, "text": linkName, "line": lineas.indexOf(linea) })
            }
        }

    }
    return arrayResult



};

module.exports = analizeFile