const cheerio = require('cheerio');
const failTestData = require('../utils/failTestData.js');
const { H93 } = require('../utils/techniques');

describe('Unit tests for H93 evaluation test', () => {
	test('Test exist', () => {
		expect(H93).toBeTruthy();
	});

	test('Pass an html code with two elements that have different id attributes', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <p id="hello">hello</p>
            <p id="bye">bye</p>
        </body>
        </html>`);

		const result = await H93($);
		expect(result).toBeFalsy();
	});

	test('Pass an html code with two elements that have equal id attributes', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <p id="hello">hello</p>
            <p id="hello">hello</p>
        </body>
        </html>`);
		const expectedResult = {
			...failTestData.H93,
			elementCount: 2,
			errorCount: 1,
		};
		const result = await H93($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass an html code with two elements that do not have an id attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <p>hello</p>
            <p>hi</p>
        </body>
        </html>`);

		const result = await H93($);
		expect(result).toBeFalsy();
	});

	test('Do not pass HTML code', async () => {
		const result = await H93();
		expect(result).toBeFalsy();
	});
});
