const { UndefinedBodyRequest } = require('../errors.js');

const validateUrl = (req, res, next) => {
	const { url } = req.body;

	if (typeof url !== 'string')
		throw new UndefinedBodyRequest('You must provide an URL.');
	else next();
};

const validateCode = (req, res, next) => {
	const { code } = req.body;

	if (typeof code !== 'string')
		throw new UndefinedBodyRequest('You must provide a HTML code.');
	else next();
};

module.exports = { validateUrl, validateCode };
