const failTestData = require('../failTestData.js');

const H96 = async ($) => {
	if ($) {
		const video = $('video');
		const elementCount = video.length;

		if (elementCount > 0) {
			const trackWithDescriptions = $('track[kind="descriptions"]');
			const videoWithTrack = video.has(trackWithDescriptions);

			const errorCount = video.length - videoWithTrack.length;

			if (errorCount > 0) {
				return {
					...failTestData.H96,
					elementCount,
					errorCount,
				};
			}
		}
	}
	return null;
};

module.exports = H96;
