const cheerio = require('cheerio');
const { H32 } = require('../utils/techniques');
const failTestData = require('../utils/failTestData.js');

describe('Unit tests for H25 evaluation test', () => {
	test('Test exist', () => {
		expect(H32).toBeTruthy();
	});

	test('Pass a HTML code with a form element with a submit button', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		<form>
			<button type="submit">Submit</button>
		</form>
	</body>
	</html>`);

		const result = await H32($);
		expect(result).toBeFalsy();
	});

	test('Pass a HTML code with a form element without a submit button', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		<form>
		</form>
	</body>
	</html>`);
		const expectedResult = {
			...failTestData.H32,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H32($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with three form elements without a submit button', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		<form>
		</form>
        <form>
		</form>
        <form>
		</form>
	</body>
	</html>`);
		const expectedResult = {
			...failTestData.H32,
			elementCount: 3,
			errorCount: 3,
		};
		const result = await H32($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code without a form element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		
	</head>
	<body>
		
	</body>
	</html>`);

		const result = await H32($);
		expect(result).toBeFalsy();
	});

	test('Do not pass HTML code', async () => {
		const result = await H32();
		expect(result).toBeFalsy();
	});
});
