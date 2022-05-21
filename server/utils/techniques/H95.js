const failTestData = require('../failTestData.js');

const H95 = async ($) => {
	if ($) {
		const video = $('video');
		const elementCount = video.length;

		if (elementCount > 0) {
			const trackWithCaptions = $('track[kind="captions"]');
			const videoWithTrack = video.has(trackWithCaptions);

			const errorCount = video.length - videoWithTrack.length;

			if (errorCount > 0) {
				return {
					...failTestData.H95,
					elementCount,
					errorCount,
				};
			}
		}
	}
	return null;
};

module.exports = H95;
