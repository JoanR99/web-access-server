const failTestData = require('../failTestData.js');

const H57 = async ($) => {
	if ($) {
		const htmlLang = $('html').attr('lang');

		if (!htmlLang || htmlLang == '') {
			return {
				...failTestData.H57,
				elementCount: 1,
				errorCount: 1,
			};
		}
	}
	return null;
};

module.exports = H57;
