module.exports.notFound = (req, res, next) => {
	const error = new Error(`Not found - ${req.originalUrl}`);
	res.status(404);
	next(error);
};

module.exports.errorLogger = (err, req, res, next) => {
	console.log(err);
	next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
	res.status(err.status).json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	});
};
