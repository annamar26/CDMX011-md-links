const marked = require('marked');
const {readFileSync} = require('fs');
const cheerio = require('cheerio');

const arrayResult = [];

function analizeFileTwo(array) {
	for (const path of array) {
		const bf = readFileSync(path);

		const str = bf.toString();

		const lineas = str.split('\n');
		for (const linea of lineas) {
			const lineHtml = marked(linea);

			const $ = cheerio.load(lineHtml);

			const linkObjects = $('a');

			arrayResult.push({
				text: $(linkObjects).text(), // Get the text
				href: $(linkObjects).attr('href'), // Get the href attribute
				line: linea.includes($(linkObjects).attr('href')) ? lineas.indexOf(linea) : null,
				file: path,

			});
		}
	}

	const filtrado = arrayResult.filter(element => element.href !== undefined);

	const secondfiltrado = filtrado.filter(element => element.href.charAt(0) !== '#');

	return (secondfiltrado);
}

module.exports = analizeFileTwo;
