const axios = require('axios');
const isValidHttpUrl = require('./validateHttpUrl.js');
const { InvalidType, ServerError } = require('../errors.js');

const getPageDOM = async (url) => {
	const validUrl = isValidHttpUrl(url);

	if (!validUrl) throw new InvalidType('Invalid URL.');

	try {
		const response = await axios.get(url);
		if (response.status === 200) {
			return response.data;
		}
	} catch (e) {
		throw new ServerError(
			'Can not fetch URL. Please make sure it is a URL to a valid website.'
		);
	}
};

module.exports = getPageDOM;
