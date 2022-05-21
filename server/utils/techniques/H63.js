const failTestData = require('../failTestData.js');

const H63 = async ($) => {
	if ($) {
		const tableHeader = $('th');
		const elementCount = tableHeader.length;

		if (elementCount > 0) {
			const errorCount = tableHeader.filter(function (i, e) {
				let scope = $(this).attr('scope');
				return (
					!scope ||
					!['row', 'col', 'rowgroup', 'colgroup'].includes(scope.trim())
				);
			}).length;

			if (errorCount > 0) {
				return {
					...failTestData.H63,
					elementCount,
					errorCount,
				};
			}
		}
	}
	return null;
};

module.exports = H63;
