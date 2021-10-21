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
        resolve(cli(optionsParse(process.argv[3], process.argv[4])));

    });
}




function cli(options) {

    mdlinks(process.argv[2], options)


    .then((answer) => {
        spinner.stop()


        let res
        let array = [];


        switch (options) {
            case 'stats':
                for (let i = 0; i < answer.length; i++) {
                    const total = 'Total:'.bold.cyan + answer[i].Total.yellow
                    const unique = 'Unique:'.bold.cyan + answer[i].Unique.yellow

                    res = total + '\n' + unique
                    console.log(res);
                }
                break;
            case 'validate':

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
                    console.log(res)
                }

                break;
            case 'both':
                for (let i = 0; i < answer.length; i++) {
                    const total = 'Total:'.bold.cyan + answer[i].Total.yellow
                    const unique = 'Unique:'.bold.cyan + answer[i].Unique.yellow
                    const broken = 'Broken:'.bold.brightRed + answer[i].Broken.yellow

                    res = total + '\n' + unique + '\n' + broken
                    console.log(res)
                }
                break;
            default:
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
                    console.log(res)
                }





        }


    })
}
showSpinner()