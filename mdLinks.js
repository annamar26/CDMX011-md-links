const analizeFile = require('./analizeFile.js');
const search = require('./searchRute.js');
const uniqueLinks = require('./uniqueLinks.js')
const validate = require('./validateAxios.js');
const isAbsolute = require('./isAbsolute.js');
const { result } = require('lodash');


function mdlinks(path, options) {

    let result = []
    return new Promise((resolver, rechazar) => {
        switch (options) {
            case 'stats':
                {
                    res = {
                        Total: `${(analizeFile(search(isAbsolute(path)))).length}`,
                        Unique: `${uniqueLinks((analizeFile(search(isAbsolute(path)))))}`
                    }

                    result.push(res)
                    resolver(result)
                    break
                }
            case 'validate':
                {

                    resolver(validate(analizeFile(search(isAbsolute(path)))).then((res) => { return res }))

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
                            result = [{
                                Total: `${(analizeFile(search(isAbsolute(path)))).length}`,
                                Unique: `${uniqueLinks((analizeFile(search(isAbsolute(path)))))}`,
                                Broken: `${broken}`
                            }]
                            return result
                        }))
                    break
                }
            default:
                resolver((analizeFile(search(isAbsolute(path)))))
        }


    })
}

module.exports = mdlinks