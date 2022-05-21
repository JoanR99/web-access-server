const cheerio = require('cheerio');
const failTestData = require('../utils/failTestData.js');
const { H44 } = require('../utils/evaluationTests.js');

describe('Unit tests for H44 evaluation test', () => {
	test('Test exist', () => {
		expect(H44).toBeTruthy();
	});

	test('Pass a HTML code with an input element of type text associated with a label element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
                <label for="hello">hello</label>
                <input type="text" name="hello" id="hello" />
            </form>
        </body>
        </html>`);

		const result = await H44($);
		expect(result).toBeFalsy();
	});

	test('Pass a HTML code with an input element of type text that is not associated with a label element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
                <input type="text" name="hello" id="hello" />
            </form>
        </body>
        </html>`);

		const expectedResult = {
			...failTestData.H44,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H44($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with an input element of type file associated with a label element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
                <label for="hello">hello</label>
                <input type="file" name="hello" id="hello" />
            </form>
        </body>
        </html>`);

		const result = await H44($);
		expect(result).toBeFalsy();
	});

	test('Pass a HTML code with an input element of type file that is not associated with a label element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
                <input type="file" name="hello" id="hello" />
            </form>
        </body>
        </html>`);

		const expectedResult = {
			...failTestData.H44,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H44($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with an input element of type password associated with a label element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
                <label for="hello">hello</label>
                <input type="password" name="hello" id="hello" />
            </form>
        </body>
        </html>`);

		const result = await H44($);
		expect(result).toBeFalsy();
	});

	test('Pass a HTML code with an input element of type password that is not associated with a label element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
                <input type="password" name="hello" id="hello" />
            </form>
        </body>
        </html>`);

		const expectedResult = {
			...failTestData.H44,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H44($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with an input element of type checkbox associated with a label element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
                <label for="hello">hello</label>
                <input type="checkbox" name="hello" id="hello" />
            </form>
        </body>
        </html>`);

		const result = await H44($);
		expect(result).toBeFalsy();
	});

	test('Pass a HTML code with an input element of type checkbox that is not associated with a label element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
                <input type="checkbox" name="hello" id="hello" />
            </form>
        </body>
        </html>`);

		const expectedResult = {
			...failTestData.H44,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H44($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with an select element associated with a label element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
                <label for="hello">hello</label>
                <select name="hello" id="hello" >
                    <option value="1"> 1 </option>
                </select>
            </form>
        </body>
        </html>`);

		const result = await H44($);
		expect(result).toBeFalsy();
	});

	test('Pass a HTML code with a select element that is not associated with a label element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
            <select name="hello" id="hello" >
                <option value="1"> 1 </option>
            </select>
            </form>
        </body>
        </html>`);

		const expectedResult = {
			...failTestData.H44,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H44($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with an textarea element associated with a label element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
                <label for="hello">hello</label>
                <textarea name="hello" id="hello" rows="4" cols="50" >
                </textarea>
            </form>
        </body>
        </html>`);

		const result = await H44($);
		expect(result).toBeFalsy();
	});

	test('Pass a HTML code with a textarea element that is not associated with a label element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
            <textarea name="hello" id="hello" rows="4" cols="50" >
            </textarea>
            </form>
        </body>
        </html>`);

		const expectedResult = {
			...failTestData.H44,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H44($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with an input of type text that not has an id attribute', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
                <label for="hello">hello</label>
                <input type="text" name="hello" />
            </form>
        </body>
        </html>`);
		const expectedResult = {
			...failTestData.H44,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H44($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code with an input of type text tha has an id attribute that not match with a for attribute of a label tag', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <form>
                <label for="bye">bye</label>
                <input type="text" name="hello" id="hello" />
            </form>
        </body>
        </html>`);
		const expectedResult = {
			...failTestData.H44,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H44($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code without an input, select or textarea element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>`);

		const result = await H44($);
		expect(result).toBeFalsy();
	});

	test('Do not pass HTML code', async () => {
		const result = await H44();
		expect(result).toBeFalsy();
	});
});
