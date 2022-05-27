const applyEvaluationTests = require('./applyEvaluationTests.js');
const processDOM = require('./processDOM.js');

const evaluatePage = async (DOM) => {
	const document = await processDOM(DOM);

	const results = await applyEvaluationTests(document);

	return results;
};

module.exports = evaluatePage;
