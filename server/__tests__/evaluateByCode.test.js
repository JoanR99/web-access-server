const request = require('supertest');
const { app, server } = require('../app.js');
const failTestData = require('../utils/failTestData.js');

afterAll(() => server.close());

describe('Evaluation by URL', () => {
	const VALID_CODE = { code: '<html></html>' };
	const INVALID_CODE = { code: 2 };

	const VALID_FAIL_TEST_DATA = [
		{ ...failTestData.H25, errorCount: 1, elementCount: 1 },
		{ ...failTestData.H57, errorCount: 1, elementCount: 1 },
	];

	const VALID_RESULTS = {
		specificResults: VALID_FAIL_TEST_DATA,
		elementsEvaluatedCount: 2,
		errorsFoundCount: 2,
	};

	const evaluateByCode = async (code) => {
		const results = await request(app).post('/api/evaluate/code').send(code);

		return results;
	};

	it('should return 200 status code when evaluation request is valid', async () => {
		const response = await evaluateByCode(VALID_CODE);

		expect(response.status).toBe(200);
	});

	it('should return evaluation results when evaluation request is valid', async () => {
		const response = await evaluateByCode(VALID_CODE);

		expect(response.body).toEqual(VALID_RESULTS);
	});

	it('should return 400 status code on request without code field', async () => {
		const response = await evaluateByCode();

		expect(response.status).toBe(400);
	});

	it('should return You must provide an URL message on request without code field', async () => {
		const response = await evaluateByCode();

		expect(response.body.message).toBe('You must provide a HTML code.');
	});

	it('should return 422 status code on request with invalid code', async () => {
		const response = await evaluateByCode(INVALID_CODE);

		expect(response.status).toBe(422);
	});

	it('should return Invalid URL message on request with invalid code', async () => {
		const response = await evaluateByCode(INVALID_CODE);

		expect(response.body.message).toBe('Invalid HTML code.');
	});
});
