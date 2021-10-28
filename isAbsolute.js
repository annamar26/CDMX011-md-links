const path = require('path');

function isAbsolute(route) {
	const absPath = path.resolve(route);
	return absPath;
}

module.exports = isAbsolute;
