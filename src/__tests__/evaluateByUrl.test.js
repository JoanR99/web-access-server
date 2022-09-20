const request = require('supertest');
const { app, server } = require('../app.js');
const failTestData = require('../utils/failTestData.js');

afterAll(() => server.close());

describe('Evaluation by URL', () => {
	const VALID_URL = { url: 'https://www.google.com' };
	const MALFORMED_URL = { url: 'hello' };
	const INVALID_URL = { url: 'https://www.goog.com' };

	const VALID_FAIL_TEST_DATA = [
		{ ...failTestData.H32, errorCount: 1, elementCount: 1 },
	];

	const VALID_RESULTS = {
		specificResults: VALID_FAIL_TEST_DATA,
		elementsEvaluatedCount: 1,
		errorsFoundCount: 1,
	};

	const evaluateByUrl = async (url) => {
		const results = await request(app).post('/api/evaluate/url').send(url);

		return results;
	};

	it('should return 200 status code when evaluation request is valid', async () => {
		const response = await evaluateByUrl(VALID_URL);

		expect(response.status).toBe(200);
	});

	it('should return evaluation results when evaluation request is valid', async () => {
		const response = await evaluateByUrl(VALID_URL);

		expect(response.body).toEqual(VALID_RESULTS);
	});

	it('should return 400 status code on request without url field', async () => {
		const response = await evaluateByUrl();

		expect(response.status).toBe(400);
	});

	it('should return You must provide an URL message on request without url field', async () => {
		const response = await evaluateByUrl();

		expect(response.body.message).toBe('You must provide an URL.');
	});

	it('should return 422 status code on request with malformed url', async () => {
		const response = await evaluateByUrl(MALFORMED_URL);

		expect(response.status).toBe(422);
	});

	it('should return Invalid URL message on request with malformed url', async () => {
		const response = await evaluateByUrl(MALFORMED_URL);

		expect(response.body.message).toBe('Invalid URL.');
	});

	it('should return 500 status code when cannot fetch url', async () => {
		const response = await evaluateByUrl(INVALID_URL);

		expect(response.status).toBe(500);
	});

	it('should return error message when cannot fetch url', async () => {
		const response = await evaluateByUrl(INVALID_URL);

		expect(response.body.message).toBe(
			'Can not fetch URL. Please make sure it is a URL to a valid website.'
		);
	});
});
