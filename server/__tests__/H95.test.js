const cheerio = require('cheerio');
const failTestData = require('../utils/failTestData.js');
const { H95 } = require('../utils/evaluationTests.js');

describe('Unit tests for H95 evaluation test', () => {
	test('Test exist', () => {
		expect(H95).toBeTruthy();
	});

	test('Pass an html code with a video tag that has a track element with a kind attribute of type captions', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <video src="#">
                <track kind="captions">Hello</track>
            </video>
        </body>
        </html>`);

		const result = await H95($);
		expect(result).toBeFalsy();
	});

	test('Pass an html code with a video tag that has a track element with a kind attribute of an invalid type', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <video src="#">
                <track kind="hello">hello</track>
            </video>
        </body>
        </html>`);
		const expectedResult = {
			...failTestData.H95,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H95($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass an html code with a video tag that has a track element with an empty kind attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <video src="#">
                <track kind=""></track>
            </video>
        </body>
        </html>`);

		const expectedResult = {
			...failTestData.H95,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H95($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass an html code with a video tag that not has a track element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <video src="#">
            </video>
        </body>
        </html>`);

		const expectedResult = {
			...failTestData.H95,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H95($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a html code without an video tag', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		
	</body>
	</html>`);

		const result = await H95($);
		expect(result).toBeFalsy();
	});

	test('Do not pass HTML code', async () => {
		const result = await H95();
		expect(result).toBeFalsy();
	});
});
