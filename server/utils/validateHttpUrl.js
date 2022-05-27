const isValidHttpUrl = (string) => {
	let url;

	try {
		url = new URL(string);
	} catch (e) {
		return false;
	}

	return url;
};

module.exports = isValidHttpUrl;
