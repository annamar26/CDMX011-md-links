const axios = require('axios');

const array = [];

function validate(result) {
	return new Promise((resolve, reject) => {
		result.forEach(element => {
			array.push(axiosValidate(element));
		});
		resolve(Promise.all(array));
		reject(new Error('No se obtuvo informacion de los links'));
	});
}

async function axiosValidate(objeto) {
	return await axios.get(objeto.href)
		.then(response => ({...objeto,
			code: response.status,
			status: 'ok',
		}))
		.catch(error => ({...objeto,
			code: 404,
			status: 'fail',
		}));
}

module.exports = validate;
