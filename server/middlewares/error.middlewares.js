const { NotFound } = require('../errors.js');

module.exports.notFound = (req, res, next) => {
	const error = new NotFound(`Not found - ${req.originalUrl}`);
	next(error);
};

module.exports.errorLogger = (err, req, res, next) => {
	console.log(err);
	next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
	res.status(err.statusCode).json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	});
};
