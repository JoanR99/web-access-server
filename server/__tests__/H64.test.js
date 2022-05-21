const cheerio = require('cheerio');
const failTestData = require('../utils/failTestData.js');
const { H64 } = require('../utils/evaluationTests.js');

describe('Unit tests for H64 evaluation test', () => {
	test('Test exist', () => {
		expect(H64).toBeTruthy();
	});

	test('Pass an html code with an iframe tag that has a valid title attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <iframe src="#" frameborder="0" title="hola" ></iframe>
        </body>
        </html>`);

		const result = await H64($);
		expect(result).toBeFalsy();
	});

	test('Pass an html code with an iframe tag that has an empty title attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <iframe src="#" frameborder="0" title="" ></iframe>
        </body>
        </html>`);
		const expectedResult = {
			...failTestData.H64,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H64($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass an html code with an iframe tag that not has a title attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <iframe src="#" frameborder="0" ></iframe>
        </body>
        </html>`);

		const expectedResult = {
			...failTestData.H64,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H64($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a html code without an iframe tag', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		
	</body>
	</html>`);

		const result = await H64($);
		expect(result).toBeFalsy();
	});

	test('Do not pass HTML code', async () => {
		const result = await H64();
		expect(result).toBeFalsy();
	});
});
