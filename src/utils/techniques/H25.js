const failTestData = require('../failTestData.js');

const H25 = async ($) => {
	if ($) {
		const title = $('head title');

		if (title.length == 0 || title.text().trim() == '')
			return { ...failTestData.H25, elementCount: 1, errorCount: 1 };
	}
	return null;
};

module.exports = H25;
