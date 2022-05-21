const cheerio = require('cheerio');
const failTestData = require('../utils/failTestData.js');
const { H36_H37 } = require('../utils/evaluationTests.js');

describe('Unit tests for H36_H37 evaluation test', () => {
	test('Test exist', () => {
		expect(H36_H37).toBeTruthy();
	});

	test('Pass a HTML code with an input element of type image that has a valid alt attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		<form>
			<input type="image" src="#" alt="hello" />
		</form>
	</body>
	</html>`);

		const result = await H36_H37($);
		expect(result).toBeFalsy();
	});

	test('Pass a HTML code with an image element that has a valid alt attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <img src="#" alt="hello" />
        </body>
        </html>`);

		const result = await H36_H37($);
		expect(result).toBeFalsy();
	});

	test('Pass a HTML code with a form element with an input of type image that has an empty alt attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		<form>
			<input type="image" src="#" alt="" />
		</form>
	</body>
	</html>`);
		const expectedResult = {
			...failTestData.H36_H37,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H36_H37($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with an image element  that has an empty alt attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
        <img src="#" alt="" />
        </body>
        </html>`);
		const expectedResult = {
			...failTestData.H36_H37,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H36_H37($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with a form element with an input of type image without an alt attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		<form>
			<input type="image" src="#" />
		</form>
	</body>
	</html>`);
		const expectedResult = {
			...failTestData.H36_H37,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H36_H37($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with an image element  without an alt attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
    <img src="#" />
	</body>
	</html>`);
		const expectedResult = {
			...failTestData.H36_H37,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H36_H37($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with a form element without an input of type image', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		<form>
			<input type="text"/>
		</form>
	</body>
	</html>`);

		const result = await H36_H37($);
		expect(result).toBeFalsy();
	});

	test('Pass a HTML code without an image element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>`);

		const result = await H36_H37($);
		expect(result).toBeFalsy();
	});

	test('Do not pass HTML code', async () => {
		const result = await H36_H37();
		expect(result).toBeFalsy();
	});
});
