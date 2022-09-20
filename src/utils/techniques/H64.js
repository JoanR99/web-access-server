const failTestData = require('../failTestData.js');

const H64 = async ($) => {
	if ($) {
		const frame = $('iframe');
		const elementCount = frame.length;

		if (elementCount > 0) {
			const errorCount = frame.filter(function (i, e) {
				let title = $(this).attr('title');
				return !title || title.trim() == '';
			}).length;

			if (errorCount > 0) {
				return {
					...failTestData.H64,
					elementCount,
					errorCount,
				};
			}
		}
	}

	return null;
};

module.exports = H64;
