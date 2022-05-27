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

app.use(errorLogger);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server running in ${ENV} mode on port ${PORT}.`));
