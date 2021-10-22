const marked = require("marked");
const { readFileSync } = require('fs');
const cheerio = require('cheerio');




function analizeFileTwo(path) {

    const bf = readFileSync(path);


    const str = bf.toString()

    const arrayResult = []
    const lineas = str.split('\n');
    for (const linea of lineas) {


        const lineHtml = marked(linea);

        const $ = cheerio.load(lineHtml);

        const linkObjects = $('a');


        arrayResult.push({
            text: $(linkObjects).text(), // get the text
            href: $(linkObjects).attr('href'), // get the href attribute
            line: linea.includes($(linkObjects).attr('href')) ? lineas.indexOf(linea) : null,
            file: path

        });



    }
    var filtrado = arrayResult.filter(function(element) {
        return element.href !== undefined


    });


    var secondfiltrado = filtrado.filter(function(element) {
        return element.href.charAt(0) !== "#"


    });
    return secondfiltrado
}
module.exports = analizeFileTwo