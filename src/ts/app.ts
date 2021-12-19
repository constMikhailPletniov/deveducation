import '../style.css';
import { domElements } from './domElements';
import { TArr, TAcc } from './types';

function getCookingTime(eggsAmount: number) {

    let result = 0;

    if (typeof eggsAmount === 'number' && isNaN(eggsAmount) === false) {

        if (eggsAmount > 0) {
            return result = Math.ceil(eggsAmount / 5);
        }
        return result;
    }

    return;
}

domElements.divOutOne.textContent = `Task 1: You can cooking eggs for: ${getCookingTime(11)} times`;


function getNumber(array: Array<number>) {
    let result: number;
    let even = 0;
    let odd = 0;

    if (Array.isArray(array)) {

        array.forEach(i => {

            if (i % 2 === 0) {
                even++;
                if (even > 1) {
                    array.find(item => item % 2 !== 0 ? result = item : false);

                }
            }
            if (i % 2 !== 0) {
                odd++;
                if (odd > 1) {
                    array.find(item => item % 2 === 0 ? result = item : false);

                }
            }
        })
        return result;
    }
    return;
}

domElements.divOutTwo.textContent = `Task 2: ${getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])}`;

const arr: Array<TArr> = [{
    title: 'Some title1'
},
{ title: 'I like JS' },
{ user: 'This obj doesn\'t have key tittle js' },
{ title: 'Js - is the best!' }];


function findTitle(array: Array<TArr>, string: string) {

    if (Array.isArray(array) && typeof string === 'string') {
        let arr: Array<string>;
        let out = '';
        array.forEach(i => {
            if (i.hasOwnProperty('title')) {
                arr = i.title.toLowerCase().split(' ');

                if (arr.includes(string)) {
                    out += JSON.stringify({ title: i.title });
                    return domElements.divOutThree.textContent = `Task 3: ${out}`;
                }
                return;
            }
            return;
        });
    }
    return;
}
findTitle(arr, 'js');




function countCharacters(string: string | Array<string>) {

    if (typeof string === 'string') {
        string = string.split('');

        const obj = string.reduce((acc, curr) => {
            const count = 1;

            if (acc.hasOwnProperty(curr)) {
                acc[curr] += count;
                return { ...acc, [curr]: acc[curr] };
            }
            return { ...acc, [curr]: count }

        }, {} as TAcc);
        domElements.divOutFour.textContent = `Task 4: ${JSON.stringify(obj)}`;

    }
    return;
}

countCharacters('aabcddeffge');



function getNextPalindrome(num: number) {

    let compareArr: number;
    let numArr: number;

    if (typeof num === 'number' && !isNaN(num)) {
        if (num < 10) {
            num = 10;
        }
        while (compareArr !== numArr) {
            num++;
            compareArr = Number(num.toString().split('').reverse().join(''));
            numArr = Number(num.toString().split('').join(''));

        }
        return num;
    }
    return;
}
domElements.divOutFive.textContent = `Task 5: ${getNextPalindrome(7)}`;
