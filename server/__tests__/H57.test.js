const cheerio = require('cheerio');
const failTestData = require('../utils/failTestData.js');
const { H57 } = require('../utils/techniques');

describe('Unit tests for H57 evaluation test', () => {
	test('Test exist', () => {
		expect(H57).toBeTruthy();
	});

	test('Pass an html code with an html tag that has a valid lang attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>`);

		const result = await H57($);
		expect(result).toBeFalsy();
	});

	test('Pass an html code with an html tag that has an empty lang attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="">
        <head>
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>`);
		const expectedResult = {
			...failTestData.H57,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H57($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass an html code with an html tag that not has a lang attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html>
        <head>
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>`);

		const expectedResult = {
			...failTestData.H57,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H57($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Do not pass HTML code', async () => {
		const result = await H57();
		expect(result).toBeFalsy();
	});
});
