#! /usr/bin/env node

const cliSpinners = require('cli-spinners');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const mdlinks = require("../mdLinks.js")
const colors = require('colors')
const optionsParse = require("../parseOptions.js")
const ora = require('ora');


const spinner = ora('Loading unicorns').start()


function showSpinner() {
    new Promise((resolve, reject) => {
        spinner
        resolve(cli(optionsParse(process.argv[3], process.argv[4]))),
            reject(spinner.stop())
    });
}


function cli(options) {


    mdlinks(process.argv[2], options)


    .then((answer) => {



        let res
        let array = [];


        switch (options) {
            case 'stats':
                spinner.stop();

                for (let i = 0; i < answer.length; i++) {
                    if (answer[i].Total === 0) { console.error('No links found'.bold.red) } else {
                        const total = 'Total:'.bold.cyan + answer[i].Total.toString().yellow
                        const unique = 'Unique:'.bold.cyan + answer[i].Unique.toString().yellow

                        res = total + '\n' + unique
                        console.log(res)
                    }

                };

                break;
            case 'validate':
                spinner.stop()
                if (answer.length === 0) {
                    console.error('No links found to validate'.bold.red)
                } else {
                    for (let i = 0; i < answer.length; i++) {


                        const href = answer[i].status === 'ok' ? answer[i].href.underline.green : answer[i].href.underline.red
                        const text = `"${answer[i].text}"`.bold.blue
                        const file = 'From:'.magenta + answer[i].file.yellow
                        const linea = `In Line:`.magenta + `${answer[i].line}`.yellow
                        const status = answer[i].status === 'ok' ? answer[i].status.inverse.green : answer[i].status.brightWhite.bgRed
                        const code = answer[i].status === 'ok' ? answer[i].code.toString().cyan : answer[i].code.toString().red

                        let values = Object.values((answer[i]))
                        values = `${href} ${text} ${file} ${linea} ${status} ${code}`

                        array.push(values)
                        res = array.join('\n')
                        res = res.replace(/,/g, " ");


                    }
                    console.log(res)
                }



                break;
            case 'both':

                spinner.stop()
                for (let i = 0; i < answer.length; i++) {
                    if (answer[i].Total === 0) {
                        console.error('No links found'.bold.red)
                    } else {
                        const total = 'Total:'.bold.cyan + answer[i].Total.toString().yellow
                        const unique = 'Unique:'.bold.cyan + answer[i].Unique.toString().yellow
                        const broken = 'Broken:'.bold.brightRed + answer[i].Broken.toString().yellow

                        res = total + '\n' + unique + '\n' + broken
                        console.log(res)
                    }

                }

                break;
            case 'onlylinks':
                spinner.stop()
                if (answer.length === 0) {
                    console.error('No links found'.bold.red)
                } else {
                    for (let i = 0; i < answer.length; i++) {
                        const href = answer[i].href.underline.cyan
                        const text = `"${answer[i].text}"`.bold.blue
                        const file = 'From:'.green + answer[i].file.yellow
                        let linea = `In Line:`.red + `${answer[i].line}`.magenta


                        let values = Object.values((answer[i]))
                        values = `${href} ${text} ${file} ${linea}`

                        array.push(values)
                        res = array.join('\n')
                        res = res.replace(/,/g, " ");

                    }
                    console.log(res)
                }

                break;
            case 'undefined':
                spinner.stop()
                console.error('Enter a valid option, entre --help command to see the valid options'.bold.red)

                break;


        }



    }).catch(error => {
        /* spinner.stop() */

        if (error.errno === -2)
            console.error('No such file or directory found, enter a valid path'.bold.red)
    })

    switch (options) {
        case 'help':
            spinner.stop()
            console.log(
                `--stats .............. shows links stats of links in given path
--validate .............. validate links' http response and shows status code and message
--validate --stats .............. shows total, unique and broken links of given path, also works if the commands are inverse
--version ............ shows package version
--help ............... shows help menu for a command`.padStart(30, ).bold.red)

            break;
    }

}
showSpinner()