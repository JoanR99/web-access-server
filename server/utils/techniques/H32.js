const failTestData = require('../failTestData.js');

const H32 = async ($) => {
	if ($) {
		const form = $('form');
		const elementCount = form.length;

		if (elementCount > 0) {
			const errorCount = await form.filter(function (i, element) {
				let children = $(this).children();
				return !children.is(
					'button[type="submit"], input[type="submit"], input[type="image"]'
				);
			}).length;

			if (errorCount > 0) {
				return {
					...failTestData.H32,
					elementCount,
					errorCount,
				};
			}
		}
	}
	return null;
};

module.exports = H32;
