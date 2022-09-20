const cheerio = require('cheerio');
const failTestData = require('../utils/failTestData.js');
const { H63 } = require('../utils/techniques');

describe('Unit tests for H63 evaluation test', () => {
	test('Test exist', () => {
		expect(H63).toBeTruthy();
	});

	test('Pass an html code with an th tag that has a valid scope attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <table>
        <tr>
        <th scope="row">hello</th>
        </tr>
            </table>
        </body>
        </html>`);

		const result = await H63($);
		expect(result).toBeFalsy();
	});

	test('Pass an html code with an th tag that has an invalid scope attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <table>
            <th scope="hello">hello</th>
            </table>
        </body>
        </html>`);
		const expectedResult = {
			...failTestData.H63,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H63($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass an html code with a th tag that not has a scope attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <table>
            <th>hello</th>
            </table>
        </body>
        </html>`);

		const expectedResult = {
			...failTestData.H63,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H63($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a html code without a th tag', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>Document</title>
	</head>
	<body>
		
	</body>
	</html>`);

		const result = await H63($);
		expect(result).toBeFalsy();
	});

	test('Do not pass HTML code', async () => {
		const result = await H63();
		expect(result).toBeFalsy();
	});
});
