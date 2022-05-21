const failTestData = require('../failTestData.js');

const H36_H37 = async ($) => {
	if ($) {
		const image = $('img, input[type="image"]');
		const elementCount = image.length;

		if (elementCount > 0) {
			const errorCount = image.filter(function (i, e) {
				let alt = $(this).attr('alt');
				return !alt || alt.trim() == '';
			}).length;

			if (errorCount > 0) {
				return {
					...failTestData.H36_H37,
					elementCount,
					errorCount,
				};
			}
		}
	}
	return null;
};

module.exports = H36_H37;
