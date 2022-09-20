const cheerio = require('cheerio');
const failTestData = require('../utils/failTestData.js');
const { H35 } = require('../utils/techniques');

describe('Unit tests for H35 evaluation test', () => {
	test('Test exist', () => {
		expect(H35).toBeTruthy();
	});

	test('Pass a HTML code with an applet element that has a valid alt attribute equal to the text content of the element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		<applet alt="hello">
		hello
		</applet>
	</body>
	</html>`);

		const result = await H35($);
		expect(result).toBeFalsy();
	});

	test('Pass a HTML code with an applet element that has a valid alt attribute different to the text content of the element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		<applet alt="hello">
		bye
		</applet>
	</body>
	</html>`);
		const expectedResult = {
			...failTestData.H35,
			errorCount: 1,
		};
		const result = await H35($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with an applet element that has an empty alt attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		<applet alt="">
		bye
		</applet>
	</body>
	</html>`);
		const expectedResult = {
			...failTestData.H35,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H35($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with an applet element without an alt attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		<applet>
		bye
		</applet>
	</body>
	</html>`);
		const expectedResult = {
			...failTestData.H35,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H35($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code without an applet element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		
	</head>
	<body>
		
	</body>
	</html>`);

		const result = await H35($);
		expect(result).toBeFalsy();
	});

	test('Do not pass HTML code', async () => {
		const result = await H35();
		expect(result).toBeFalsy();
	});
});
