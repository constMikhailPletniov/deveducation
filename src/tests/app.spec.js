//const { getStorageData, getFormAction, getPlansItem } = require('../app.js');
import { getStorageData, getFormAction, getPlansItem } from '../app.js';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Testing app.js', () => {
    beforeAll(() => {
        localStorage.setItem({ "111111111": "value1" });
        let mouseClick = new MouseEvent('click', { bubbles: true });
        document.querySelector('#inputSubmit').dispatchEvent(mouseClick);
    });
    test('getStorageData', () => {

        expect(getStorageData()).not.toBe(undefined);
    });
    test('getFormAction', () => {

        expect(getFormAction()).not.toBe(undefined);
    });
    test('getPlansItem', () => {

        expect(getPlansItem()).not.toBe(undefined);
    });
});