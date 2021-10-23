const analizeFile = require('./analizeFile2.js');
const search = require('./searchRute.js');
const uniqueLinks = require('./uniqueLinks.js')
const validate = require('./validateAxios.js');
const isAbsolute = require('./isAbsolute.js');



let result = []

function mdlinks(path, options) {


    return new Promise((resolver, rechazar) => {
        const res = uniqueLinks((analizeFile(search(isAbsolute(path)))));
        switch (options) {
            case 'stats':
                {



                    result.push({ Total: res.Total, Unique: res.Unique })
                    resolver(result)
                    reject('No links found')
                    break
                }
            case 'validate':
                {

                    resolver(validate(analizeFile(search(isAbsolute(path)))).then((res) => { return res }))
                    reject('No links found')

                    break
                }
            case 'both':
                {


                    resolver(validate(analizeFile(search(isAbsolute(path))))
                        .then((links) => {
                            let broken = 0
                            for (const link of links) {
                                if (link.status === 'fail') broken += 1
                            }




                            objeto = { Total: res.Total, Unique: res.Unique }
                            result.push({...objeto,
                                'Broken': broken,

                            })

                            return result
                        }))
                    reject('No md files found')
                    break
                }
            case 'onlylinks':
                resolver((analizeFile(search(isAbsolute(path)))))
                reject('No links found')
                break
            case 'undefined':
                resolver([])
                break
        }


    })
}

module.exports = mdlinks