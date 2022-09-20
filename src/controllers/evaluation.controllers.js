const evaluatePage = require('../utils/evaluatePage.js');
const getPageDOM = require('../utils/getPageDOM.js');

module.exports.evaluateByUrl = async (req, res, next) => {
	const { url } = req.body;

	const DOM = await getPageDOM(url);

	const results = await evaluatePage(DOM);

	res.status(200).json(results);
};

module.exports.evaluateByCode = async (req, res, next) => {
	const { code } = req.body;

	const results = await evaluatePage(code);

	res.status(200).json(results);
};
