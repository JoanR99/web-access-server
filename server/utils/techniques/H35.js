const failTestData = require('../failTestData.js');

const H35 = async ($) => {
	if ($) {
		const applet = $('applet');
		const elementCount = applet.length;
		if (elementCount > 0) {
			const errorCount = applet.filter(function (i, e) {
				let alt = $(this).attr('alt');
				let text = $(this).text();
				return !alt || alt.trim() == '' || text.trim() != alt.trim();
			}).length;

			if (errorCount > 0) {
				return {
					...failTestData.H35,
					elementCount,
					errorCount,
				};
			}
		}
		return null;
	}
};

module.exports = H35;
