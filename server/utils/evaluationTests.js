const failTestData = require('./failTestData.js');

module.exports.H25 = async ($) => {
	if ($) {
		const title = $('head title');

		if (title.length == 0 || title.text().trim() == '')
			return { ...failTestData.H25, elementCount: 1, errorCount: 1 };
	}
	return null;
};

module.exports.H32 = async ($) => {
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

module.exports.H35 = async ($) => {
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

module.exports.H36_H37 = async ($) => {
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

module.exports.H44 = async ($) => {
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

module.exports.H46 = async ($) => {
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

module.exports.H57 = async ($) => {
	if ($) {
		const htmlLang = $('html').attr('lang');

		if (!htmlLang || htmlLang == '') {
			return {
				...failTestData.H57,
				elementCount: 1,
				errorCount: 1,
			};
		}
	}
	return null;
};

module.exports.H63 = async ($) => {
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

module.exports.H64 = async ($) => {
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

module.exports.H93 = async ($) => {
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

module.exports.H95 = async ($) => {
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

module.exports.H96 = async ($) => {
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
