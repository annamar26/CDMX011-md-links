const Abspaths = [
	'/home/anita/CDMX011-social-network/README.md',
	'/home/anita/CDMX011-md-links/README.md',
];
const relPaths = [
	'../CDMX011-social-network/README.md',
	'../CDMX011-md-links/README.md',
];
const arrayLinks = [
	{
		href: 'https://github.com/workshopper/learnyounode',
		text: 'learnyounode',
		file: 'home/anita/CDMX011-md-links/README.md',
	},
	{
		href: 'https://github.com/workshopper/how-to-npm',
		text: 'how-to-npm',
		file: 'home/anita/CDMX011-social-network/README.md',
	},
	{
		href: 'https://github.com/stevekane/promise-it-wont-hurt',
		text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
		file: 'home/anita/CDMX011-md-links/README.md',
	},
	{
		href: 'https://github.com/stevekane/promise-it-wont-hurt',
		text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
		file: 'home/anita/CDMX011-md-links/README.md',
	},
];
const mdlinksValidate = [
	{
		href: 'https://github.com/workshopper/learnyounode',
		text: 'learnyounode',
		file: 'home/anita/CDMX011-md-links/README.md',
		code: 200,
		status: 'ok',
	},
	{
		href: 'https://github.com/workshopper/how-to-npm',
		text: 'how-to-npm',
		file: 'home/anita/CDMX011-social-network/README.md',
		code: 200,
		status: 'ok',
	},
	{
		href: 'https://github.com/stevekane/promise-it-wont-hurt',
		text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
		file: 'home/anita/CDMX011-social-network/README.md',
		code: 404,
		status: 'fail',
	},
	{
		href: 'https://github.com/stevekane/promise-it-wont-hurt',
		text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
		file: 'home/anita/CDMX011-social-network/README.md',
		code: 404,
		status: 'fail',
	},
];

const uniqueLinksArray = [
	{
		href: 'https://github.com/workshopper/learnyounode',
		text: 'learnyounode',
		file: 'home/anita/CDMX011-md-links/README.md',
		code: 200,
		status: 'ok',
	},
	{
		href: 'https://github.com/workshopper/how-to-npm',
		text: 'how-to-npm',
		file: 'home/anita/CDMX011-social-network/README.md',
		code: 200,
		status: 'ok',
	},
	{
		href: 'https://github.com/stevekane/promise-it-wont-hurt',
		text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
		file: 'home/anita/CDMX011-social-network/README.md',
		code: 404,
		status: 'fail',
	},
];
const brokenLinks = [{
	href: 'https://github.com/stevekane/promise-it-wont-hurt',
	text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
	file: 'home/anita/CDMX011-social-network/README.md',
	code: 404,
	status: 'fail'},
{href: 'https://github.com/stevekane/promise-it-wont-hurt',
	text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
	file: 'home/anita/CDMX011-social-network/README.md',
	code: 404,
	status: 'fail',
}];

module.exports = {Abspaths, relPaths, arrayLinks, mdlinksValidate, uniqueLinksArray, brokenLinks};

