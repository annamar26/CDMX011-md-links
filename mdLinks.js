const process = require('process');
const analizeFile = require('./analizeFile.js');
const search = require('./searchRute.js');
const uniqueLinks = require('./uniqueLinks.js')
const validate = require('./validateAxios.js')

let options = process.argv[3];
let file = process.argv[2]
let options2 = process.argv[4]

const isAbsolute = require('./isAbsolute.js');



function mdLinks(userChoice, option1, option2) {
    if (options === '--stats' && options2=== null || undefined){
        result = `Total: ${(analizeFile(search(isAbsolute(userChoice)))).length}\nUnique: ${uniqueLinks((analizeFile(search(isAbsolute(userChoice)))))}`
        console.log(result)
    }else if (option1 === null || undefined) {
        console.log(analizeFile(search(isAbsolute(userChoice))))



    } else if (option1 === '--validate' && option2=== null || undefined) {
validate(analizeFile(search(isAbsolute(userChoice)))).then((res)=>console.log(res))

    }else if (option1 === '--validate' & option2 === '--stats' || option1 === '--stats' & option2 === '--validate') {

        validate(analizeFile(search(isAbsolute(userChoice))))
        .then((links)=>{
            let broken = 0
            for (const link of links){
                if(link.status === 'fail') broken+=1
            }
            result =  `Total: ${(analizeFile(search(isAbsolute(userChoice)))).length}\nUnique: ${uniqueLinks((analizeFile(search(isAbsolute(userChoice)))))}\nBroken: ${broken}`
        console.log(result)})    
            
}
}

mdLinks(file, process.argv[3], process.argv[4])