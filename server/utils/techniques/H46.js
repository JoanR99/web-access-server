const failTestData = require('../failTestData.js');

const H46 = async ($) => {
	if ($) {
		const embed = $('embed');
		const elementCount = embed.length;

		if (elementCount > 0) {
			const noembed = $('embed:has(noembed), embed + noembed');

			const errorCount = embed.length - noembed.length;

			if (errorCount > 0) {
				return {
					...failTestData.H46,
					elementCount,
					errorCount,
				};
			}
		}
	}
	return null;
};

module.exports = H46;
