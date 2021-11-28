const { getStorageData, getFormAction, getPlansItem } = require('../app.js');
//const elementsOfDom = require('../elements.js');
const dom = new JSDOM(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>To_do_List on MCV patterns</title>
        </head>
        
        <body>
        
            <header class="header">
                <h1>To Do List on class with MCV Pattern</h1>
            </header>
            <main class="wrapper">
                <section class="mainContainer">
                    <form id="formToDo">
                        <textarea name="textAreaText" id="textAreaText" cols="10" rows="3"></textarea>
                        <input type="submit" value="submit" title="Click submit if want add something" class="inputClass"
                            id="inputSubmit" />
                    </form>
                    <div class="out">
                        <ul class="listPlans"></ul>
                    </div>
                </section>
            </main>
            <footer class="footer">
                <h2>Created by Mikhail Pletniov</h2>
            </footer>
        
        </body>
        
        </html>`);
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
describe('Testing app.js', () => {
    beforeAll(() => {

    });
    test('getStorageData', () => {

        expect(undefined).not.toBe(undefined);
    });
    test('getFormAction', () => {
        expect(dom.window.document.querySelector('#formToDo').addEventListener('submit', getFormAction)).not.toBe(undefined);
    });
    test('getPlansItem', () => {

        expect(getPlansItem()).not.toBe(undefined);
    });
});