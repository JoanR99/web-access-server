const {
	H25,
	H32,
	H35,
	H36_H37,
	H44,
	H46,
	H57,
	H63,
	H64,
	H93,
	H95,
	H96,
} = require('./techniques');
const { ServerError } = require('../errors.js');

const applyEvaluationTests = async (document) => {
	try {
		const testResults = await Promise.all([
			H25(document),
			H32(document),
			H35(document),
			H36_H37(document),
			H44(document),
			H46(document),
			H57(document),
			H63(document),
			H64(document),
			H93(document),
			H95(document),
			H96(document),
		]);

		const specificResults = testResults.filter(
			(testResult) => testResult !== null
		);

		const elementsEvaluatedCount = specificResults.reduce(
			(acc, test) => acc + test.elementCount,
			0
		);

		const errorsFoundCount = specificResults.reduce(
			(acc, test) => acc + test.errorCount,
			0
		);

		return {
			specificResults,
			elementsEvaluatedCount,
			errorsFoundCount,
		};
	} catch (e) {
		throw new ServerError('Something went wrong. Please try again.');
	}
};

module.exports = applyEvaluationTests;
