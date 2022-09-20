const express = require('express');
const {
	notFound,
	errorLogger,
	errorHandler,
	asyncErrorHandler,
} = require('./src/middlewares/error.middlewares.js');
const {
	evaluateByUrl,
	evaluateByCode,
} = require('./src/controllers/evaluation.controllers.js');
const {
	validateUrl,
	validateCode,
} = require('./src/middlewares/validation.middleware');

const app = express();

app.use(express.json());

app.post('/api/evaluate/url', validateUrl, asyncErrorHandler(evaluateByUrl));

app.post('/api/evaluate/code', validateCode, asyncErrorHandler(evaluateByCode));

app.use(notFound);

const ENV = process.env.NODE_ENV;

if (ENV === 'development') app.use(errorLogger);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(`Server running in ${ENV} mode on port ${PORT}.`)
);

module.exports = { app, server };
