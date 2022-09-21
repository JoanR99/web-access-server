const corsOptions = {
	origin: (origin, callback) => {
		callback(null, origin);
	},
	optionsSuccessStatus: 200,
};

module.exports = corsOptions;
