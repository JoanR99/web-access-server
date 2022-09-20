const failTestData = require('../failTestData.js');

const H44 = async ($) => {
	if ($) {
		const input = $(
			'input[type="text"], input[type="file"], input[type="password"], input[type="checkbox"], select, textarea'
		);
		const elementCount = input.length;

		if (elementCount > 0) {
			const errorCount = input.filter(function (i, e) {
				let id = $(this).attr('id');
				let labelForId = $(`label[for=${id}]`).attr('for');
				return !id || !labelForId;
			}).length;

			if (errorCount > 0) {
				return {
					...failTestData.H44,
					elementCount,
					errorCount,
				};
			}
		}
	}
	return null;
};

module.exports = H44;
