function optionsParse(o1, o2) {
	if ((o1 === '--stats') && (o2 === undefined)) {
		return 'stats';
	}

	if ((o1 === '--validate') && (o2 === undefined)) {
		return 'validate';
	}

	if ((o1 === '--stats') && (o2 === '--validate')) {
		return 'both';
	}

	if ((o1 === '--validate') && (o2 === '--stats')) {
		return 'both';
	}

	if (o1 === undefined && o2 === undefined) {
		return 'onlylinks';
	}

	if (o1 === '--help') {
		return 'help';
	}

	return 'undefined';
}

module.exports = optionsParse;
