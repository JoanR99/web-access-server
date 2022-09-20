const cheerio = require('cheerio');
const { InvalidType } = require('../errors.js');

const processDOM = async (DOM) => {
	try {
		const doc = await cheerio.load(DOM);
		return doc;
	} catch (e) {
		throw new InvalidType('Invalid HTML code.');
	}
};

module.exports = processDOM;
