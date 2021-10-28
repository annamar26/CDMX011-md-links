#! /usr/bin/env node

const mdlinks = require('../mdLinks.js');
const colors = require('colors');
const optionsParse = require('../parseOptions.js');
const ora = require('ora');

const spinner = ora('Loading data'.rainbow);

async function showSpinner() {
	spinner.start();
	return await cli(optionsParse(process.argv[3], process.argv[4]));
}

function cli(options) {
	mdlinks(process.argv[2], options)

		.then(answer => {
			let res;
			const array = [];
			spinner.stop();
			switch (options) {
				case 'stats':

					for (let i = 0; i < answer.length; i++) {
						if (answer[i].Total === 0) {
							console.error('No links found'.bold.red);
						} else {
							const total = 'Total:'.bold.cyan + answer[i].Total.toString().yellow;
							const unique = 'Unique:'.bold.cyan + answer[i].Unique.toString().yellow;

							res = total + '\n' + unique;

							console.log(res);
						}
					}

					break;
				case 'validate':

					if (answer.length === 0) {
						console.error('No links found to validate'.bold.red);
					} else {
						for (let i = 0; i < answer.length; i++) {
							const href = answer[i].status === 'ok' ? answer[i].href.underline.green : answer[i].href.underline.red;
							const text = `"${answer[i].text}"`.bold.blue;
							const file = 'From:'.magenta + answer[i].file.yellow;
							const linea = 'In Line:'.magenta + `${answer[i].line}`.yellow;
							const status = answer[i].status === 'ok' ? answer[i].status.inverse.green : answer[i].status.brightWhite.bgRed;
							const code = answer[i].status === 'ok' ? answer[i].code.toString().cyan : answer[i].code.toString().red;

							let values = Object.values((answer[i]));
							values = `${href} ${text} ${file} ${linea} ${status} ${code}`;

							array.push(values);
							res = array.join('\n');
							res = res.replace(/,/g, ' ');
						}

						console.log(res);
					}

					break;
				case 'both':

					for (let i = 0; i < answer.length; i++) {
						if (answer[i].Total === 0) {
							console.error('No links found'.bold.red);
						} else {
							const total = 'Total:'.bold.cyan + answer[i].Total.toString().yellow;
							const unique = 'Unique:'.bold.cyan + answer[i].Unique.toString().yellow;
							const broken = 'Broken:'.bold.brightRed + answer[i].Broken.toString().yellow;

							res = total + '\n' + unique + '\n' + broken;

							console.log(res);
						}
					}

					break;
				case 'onlylinks':
					if (answer.length === 0) {
						console.error('No links found'.bold.red);
					} else {
						for (let i = 0; i < answer.length; i++) {
							const href = answer[i].href.underline.cyan;
							const text = `"${answer[i].text}"`.bold.blue;
							const file = 'From:'.green + answer[i].file.yellow;
							const linea = 'In Line:'.red + `${answer[i].line}`.magenta;

							let values = Object.values((answer[i]));
							values = `${href} ${text} ${file} ${linea}`;

							array.push(values);
							res = array.join('\n');
							res = res.replace(/,/g, ' ');
						}

						console.log(res);
					}

					break;
				case 'undefined':
					spinner.stop();
					console.error('Enter a valid option, entre --help command to see the valid options'.bold.red);

					break;
			}
		}).catch(error => {
			/* Spinner.stop() */

			if (error.errno === -2) {
				spinner.stop();
				console.error('No such file or directory found, enter a valid path'.bold.red);
			}
		});

	switch (options) {
		case 'help':
			spinner.stop();
			console.log(
				`--stats .............. shows links stats of links in given path
--validate .............. validate links' http response and shows status code and message
--validate --stats .............. shows total, unique and broken links of given path, also works if the commands are inverse
--version ............ shows package version
--help ............... shows help menu for a command`.padStart(30).bold.red);

			break;
	}
}

showSpinner();
