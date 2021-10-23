const axios = require('axios');



let array = []

function validate(result) {
    return new Promise((resolve, reject) => {
        result.forEach(element => {
            array.push(axiosValidate(element))


        })
        resolve(Promise.all(array))
        reject(new Error('No se obtuvo informacion de los links'))

    })
}

async function axiosValidate(objeto) {
    return await axios.get(objeto.href)
        .then(response => {
            return {...objeto,
                'code': response.status,
                'status': 'ok'
            }


        })
        .catch(error => {
            return {...objeto,
                'code': 404,
                'status': 'fail'
            }
        });
}

module.exports = validate