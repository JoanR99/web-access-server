const cheerio = require('cheerio');
const failTestData = require('../utils/failTestData.js');
const { H46 } = require('../utils/techniques');

describe('Unit tests for H37 evaluation test', () => {
	test('Test exist', () => {
		expect(H46).toBeTruthy();
	});

	test('Pass an html code with an embed element that has a child noembed element that describes it', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <embed src="#" type="">
                <noembed>hello</noembed>
            </embed>
        </body>
        </html>`);

		const result = await H46($);
		expect(result).toBeFalsy();
	});

	test('Pass an html code with an embed element that has a sibling noembed element that describes it', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <embed src="#" type="" />
            <noembed>hola</noembed>
        </body>
        </html>`);

		const result = await H46($);
		expect(result).toBeFalsy();
	});

	test('Pass an html code with an embed element that not has a noembed element that describes it', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <embed src="#" type="" />
        </body>
        </html>`);
		const expectedResult = {
			...failTestData.H46,
			elementCount: 1,
			errorCount: 1,
		};
		const result = await H46($);
		expect(result).toMatchObject(expectedResult);
	});

	test('Pass a HTML code without an embed element', async () => {
		const $ = await cheerio.load(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>`);

		const result = await H46($);
		expect(result).toBeFalsy();
	});

	test('Do not pass HTML code', async () => {
		const result = await H46();
		expect(result).toBeFalsy();
	});
});
