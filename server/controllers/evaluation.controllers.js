const asyncHandler = require('express-async-handler');
const evaluatePage = require('../utils/evaluatePage.js');
const getPageDOM = require('../utils/getPageDOM.js');

module.exports.evaluateByUrl = asyncHandler(async (req, res) => {
	const { url } = req.body;

	const DOM = await getPageDOM(url);

	const results = await evaluatePage(DOM);

	if (results) {
		res.status(200).json(results);
	} else {
		res.status(500);
		throw new Error('Evaluation error');
	}
});

module.exports.evaluateByCode = asyncHandler(async (req, res) => {
	const { code } = req.body;

	const results = await evaluatePage(code);

	if (results) {
		res.status(200).json(results);
	} else {
		res.status(500);
		throw new Error('Evaluation error');
	}
});
