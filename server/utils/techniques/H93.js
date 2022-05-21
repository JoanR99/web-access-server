const failTestData = require('../failTestData.js');

const H93 = async ($) => {
	if ($) {
		const id = $('[id]');
		const elementCount = id.length;

		if (elementCount > 0) {
			const idArray = id
				.map(function (i, e) {
					return $(this).attr('id');
				})
				.toArray();

			const idSet = new Set(idArray);

			const errorCount = idArray.length - idSet.size;

			if (errorCount > 0) {
				return {
					...failTestData.H93,
					elementCount,
					errorCount,
				};
			}
		}
	}
	return null;
};

module.exports = H93;
