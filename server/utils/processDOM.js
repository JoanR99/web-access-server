const cheerio = require('cheerio');

const processDOM = async (DOM) => {
	if (typeof DOM === 'undefined')
		throw new Error('You must provide a valid DOM');

	try {
		const doc = await cheerio.load(DOM);
		return doc;
	} catch (e) {
		throw new Error('Can not load DOM.');
	}
};

module.exports = processDOM;
