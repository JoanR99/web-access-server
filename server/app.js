const express = require('express');
const {
	notFound,
	errorLogger,
	errorHandler,
} = require('./middlewares/error.middlewares.js');
const {
	evaluateByUrl,
	evaluateByCode,
} = require('./controllers/evaluation.controllers.js');

const app = express();

app.use(express.json());

app.post('/api/evaluate/url', evaluateByUrl);

app.post('/api/evaluate/code', evaluateByCode);

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
