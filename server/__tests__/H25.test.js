const cheerio = require('cheerio');
const failTestData = require('../utils/failTestData.js');
const { H25 } = require('../utils/techniques');

describe('Unit tests for H25 evaluation test', () => {
	test('Evaluation test exist', () => {
		expect(H25).toBeTruthy();
	});

	test('Pass a HTML code with valid title', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>`);

		const response = await H25($);

		expect(response).toBeFalsy();
	});

	test('Pass a HTML code with empty title', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title></title>
	</head>
	<body>
		
	</body>
	</html>`);

		const expectedResult = {
			...failTestData.H25,
			elementCount: 1,
			errorCount: 1,
		};
		const response = await H25($);

		expect(response).toMatchObject(expectedResult);
	});

	test('Pass a HTML code without title', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		
	</head>
	<body>
		
	</body>
	</html>`);

		const expectedResult = {
			...failTestData.H25,
			elementCount: 1,
			errorCount: 1,
		};
		const response = await H25($);

		expect(response).toMatchObject(expectedResult);
	});

	test('Do not pass HTML code', async () => {
		const response = await H25();
		expect(response).toBeFalsy();
	});
});
