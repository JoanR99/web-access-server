const express = require('express');
const cors = require('cors');
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

const corsOptions = require('./src/config/corsOptions');

const app = express();

app.use(cors(corsOptions));

app.use((req, res, next) => {
	res.header({ 'Access-Control-Allow-Origin': '*' });
	next();
});

app.options('/*', (_, res) => {
	res.sendStatus(200);
});

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
