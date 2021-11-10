/*1.Составьте алгоритм, который считает, сколько времени вам нужно на
приготовление яиц.
Правила:
-Яйца варить 5 минут
-Вместительность емкости не более 5 яиц одновременно*/

function getCookingTime(eggsAmount) {

    let result = 0;

    if (!eggsAmount) return;

    if (eggsAmount > 0) {
        return result = Math.ceil(eggsAmount / 5);
    }
    return result;



}
console.log('task1: ', getCookingTime(11));

/*2.Получая массив чисел. Все они либо нечетные, либо четные, кроме
одного. Тебе нужно его найти*/

function getNumber(array) {
    let result;
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
console.log('task2: ', getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]));

//getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])

/*3. Принимая массив объектов и случайную строку. У объектов может
быть ключ: «title» с разными значениями. Создайте алгоритм, который
фильтрует массив, заданный как первый параметр, и возвращает
массив объектов, которые содержат в своих заголовках заданную строку
в качестве второго параметра (без учета регистра).*/
const arr = [{
    title: 'Some title1'
},
{ title: 'I like JS' },
{ user: 'This obj doesn\'t have key tittle js' },
{ title: 'Js - is the best!' }];


function findTitle(array, string) {

    if (!Array.isArray(array) && typeof string !== 'string') return;
    let arr;

    return array.reduce((acc, curr) => {
        if (curr.hasOwnProperty('title')) {
            arr = curr.title.toLowerCase().split(' ');
            if (arr.includes(string)) {

                acc.push(curr);
            }
        }
        return acc;
    }, []);

}
console.log('task 3: ', findTitle(arr, 'js'));


/*4. Принимая строку, ваша функция должна вернуть обьект, в котором
ключи – символы строки, значение – количество повторений символов в
строке*/

function countCharacters(string) {

    if (typeof string === 'string') {
        string = string.split('');

        const obj = string.reduce((acc, curr) => {
            let count = 1;

            if (acc.hasOwnProperty(curr)) {
                acc[curr] += count;
                return { ...acc, [curr]: acc[curr] };
            }
            return { ...acc, [curr]: count }

        }, {});
        return obj;
    }
    return;
}

console.log('task 4: ', countCharacters('aabcddeffge'));


/*5. Принимая число, ваша функция должна найти следующий
положительный палиндром большего размера.
Палиндром - это слово, фраза, число или другая последовательность
символов, которая читается так же, как вперед и назад, например,
«мадам».*/

function getNextPalindrome(num) {

    let compareArr = [];
    let numArr = [];

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
console.log('task 5: ', getNextPalindrome(7));

