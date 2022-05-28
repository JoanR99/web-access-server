const evaluatePage = require('../utils/evaluatePage.js');
const getPageDOM = require('../utils/getPageDOM.js');
const { UndefinedBodyRequest } = require('../errors.js');

module.exports.evaluateByUrl = async (req, res, next) => {
	try {
		const { url } = req.body;

		if (typeof url === 'undefined')
			throw new UndefinedBodyRequest('You must provide an URL.');

		const DOM = await getPageDOM(url);

		const results = await evaluatePage(DOM);

		res.status(200).json(results);
	} catch (e) {
		next(e);
	}
};

module.exports.evaluateByCode = async (req, res, next) => {
	try {
		const { code } = req.body;

		if (typeof code === 'undefined')
			throw new UndefinedBodyRequest('You must provide a HTML code.');

		const results = await evaluatePage(code);

		res.status(200).json(results);
	} catch (e) {
		next(e);
	}
};
