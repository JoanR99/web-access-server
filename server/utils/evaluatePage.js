const applyEvaluationTests = require('./applyEvaluationTests.js');
const processDOM = require('./processDOM.js');

const evaluatePage = async (DOM) => {
	if (typeof DOM === 'undefined')
		throw new Error('You must provide a valid DOM');

	const document = await processDOM(DOM);

	const results = await applyEvaluationTests(document);

	return results;
};

module.exports = evaluatePage;
