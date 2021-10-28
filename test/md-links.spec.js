const {Abspaths, relPaths, arrayLinks, mdlinksValidate, uniqueLinksArray, brokenLinks} = require('./__mocks__/mock.js');
const isAbsolute = require('../isAbsolute.js');
const uniqueLinks = require('../uniqueLinks.js');
const broken = require('../brokenLinks.js');
const optionsParse = require('../parseOptions.js');
const validate = require('../validateAxios.js');

describe('isAbsolute', () => {
	it('should be a function ', () => {
		expect(typeof isAbsolute).toBe('function');
	});
	it('should return and absolute route from a givven path ', () => {
   	expect(isAbsolute(relPaths[0])).toBe(Abspaths[0]);
	});
	it('should return and absolute route from a givven path ', () => {
		expect(isAbsolute(relPaths[1])).toBe(Abspaths[1]);
	});
});
describe('uniqueLinks', () => {
	it('should be a function ', () => {
		expect(typeof uniqueLinks).toBe('function');
	});
	it('should return only the unique links of an array', () => {
   	expect(uniqueLinks(arrayLinks)).toMatchObject({Total: arrayLinks.length, Unique: uniqueLinksArray.length});
	});
});
describe('broken', () => {
	it('should be a function ', () => {
		expect(typeof broken).toBe('function');
	});
	it('should return only NUMBER of the broken links of an array', () => {
   	expect(broken(mdlinksValidate)).toBe(brokenLinks.length);
	});
});
describe('optiosParse', () => {
	it('should be a function ', () => {
		expect(typeof optionsParse).toBe('function');
	});
	it('should return the string without -- for use in the command options ', () => {
		expect(optionsParse('--validate')).toBe('validate');
		expect(optionsParse('--stats')).toBe('stats');
		expect(optionsParse('--stats', '--validate')).toBe('both');
		expect(optionsParse('--validate', '--stats')).toBe('both');
		expect(optionsParse()).toBe('onlylinks');
		expect(optionsParse('--help')).toBe('help');
		expect(optionsParse('--s', '')).toBe('undefined');
	});
});
describe('validate', () => {
	it('should be a function', () => {
		expect(typeof validate.validate).toBe('function');
	});
  it('should be a function', () => {
		expect(typeof validate.axiosValidate).toBe('function');
	});
  it('should be a function', () => {
		validate.validate(arrayLinks).then((res)=>{expect(res).toMatchObject(mdlinksValidate)});
	});
});

