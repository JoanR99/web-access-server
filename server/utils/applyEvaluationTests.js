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
} = require('./evaluationTests.js');

const applyEvaluationTests = async (document) => {
	if (typeof document === 'undefined')
		throw new Error('You must provide valid HTML nodes.');

	try {
		const testResults = await [
			await H25(document),
			await H32(document),
			await H35(document),
			await H36_H37(document),
			await H44(document),
			await H46(document),
			await H57(document),
			await H63(document),
			await H64(document),
			await H93(document),
			await H95(document),
			await H96(document),
		];

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
		throw new Error(e);
	}
};

module.exports = applyEvaluationTests;
