const axios = require('axios');

const getPageDOM = async (url) => {
	if (typeof url === 'undefined') throw new Error('You must provide an URL.');

	try {
		const response = await axios.get(url);
		if (response.status === 200) {
			return response.data;
		}
	} catch (e) {
		throw new Error('Can not fetch url');
	}
};

module.exports = getPageDOM;
