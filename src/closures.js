/*1. Новый фильм &quot;Как натренировать своего дракона” только
выпустили! В кассах кинотеатра много людей, стоящих в
огромную очередь. У каждого из них есть банкнота в 100, 50 или
25 долларов. Билет на «Бэтмен против Супермена: На заре
справедливости» стоит 25 долларов. Вася в настоящее время
работает клерком. Он хочет продать билет каждому человеку в
этой очереди. Может ли Вася продать каждому билет и отдать
сдачу, если у него изначально нет денег и он продает билеты
строго в том порядке, в котором люди следуют в очереди?
Верните YES, если Вася может продать каждому билет и отдать
сдачу. В противном случае верните NO. Может ли Вася продать
каждому билет и отдать сдачу?
Условия:
* принимает массив из очереди людей
* возвращает строку*/

function buyTickets(presonArr) {

    if (!Array.isArray(presonArr)) return;
    const price = 25;
    let wallet = [];
    let result = 0;
    let change = 0;

    presonArr = presonArr.map(i => Number(i));

    presonArr.forEach(item => {

        if (item === price) {
            wallet.push(item);
        }
        else if (item > price) {
            if (wallet[0] === undefined) return;
            change = item - price;

            result = wallet.reduce((acc, curr, index) => {
                if (acc === change) return acc;
                curr = Math.max(curr);
                acc += curr;
                delete wallet[index];
                return acc;
            }, 0);
            wallet.push(item);
            wallet = wallet.filter(i => i !== 'undefined')
        }
    });
    if (result === change) return 'YES';
    return 'NO';
}
console.log('task 1: ', buyTickets([50, 25, 100]));

/*2. Напишите функцию, которая получает два бесконечных числа в
виде строк. Вы должны вернуть результат суммы этих двух чисел
в виде строки. Математическая работа с этими двумя числами
недоступна. Не используйте BigInt*/

function getSum(num1, num2) {
    const arrResult = [];
    let length;

    if (typeof num1 && typeof num2 !== 'string') return;

    num1 = num1.split('').map(i => Number(i));
    num2 = num2.split('').map(i => Number(i));

    if (num1.length > num2.length) {

        length = num1.length - num2.length;

        for (let i = 0; i < length; i++) {
            num2.unshift(0);
        }
        for (let i = 0; i < num1.length; i++) {

            arrResult.push(num1[i] + num2[i]);
        }
    } else if (num1.length < num2.length) {
        length = num2.length - num1.length;

        for (let i = 0; i < length; i++) {
            num1.unshift(0);
        }
        for (let i = 0; i < num2.length; i++) {

            arrResult.push(num1[i] + num2[i]);
        }
    } else {
        for (let i = 0; i < num2.length; i++) {

            arrResult.push((num1[i] + num2[i]).toString());
        }
    }
    const result = arrResult.join('');
    return result;
}

console.log('task 2: ', getSum('111111111111111111111111111111111111111111111111111111111111111', '233333333333333333333333333333333333333333333333333333333333333'));

/*3. Создайте функцию, которая получает два аргумента: первый -
это массив объектов, второй - строка (имя автора). Ваша
функция должна возвращать количество сообщений с автором
из аргумента функции и комментариев с тем же автором. Пример
массива:*/

const listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {

                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }
]

function getSumAuthorAndPosts(arrObj, authorStr) {
    let postsCount = 0;
    let commentsCount = 0;
    const obj = {};
    if (Array.isArray(arrObj) && typeof authorStr === 'string') {

        arrObj.forEach(element => {
            if (element.author === authorStr && element.post) {
                postsCount++;
            }

            if (element.comments) {
                element.comments.forEach(i => {
                    if (i.author === authorStr && i.comment) {
                        commentsCount++;
                    }
                });
            }
            Object.assign(obj, { post: postsCount, comment: commentsCount });
            return obj
        });
        return obj;
    }
    return;
}

console.log('task 3: ', getSumAuthorAndPosts(listOfPosts2, 'Rimus'));

/*4.Напишите функцию кеш*/

const concatFunc = (arg1, arg2) => {
    return arg1 + arg2;
};

function getCache() {
    const cachedArr = [];
    return function () {
        if (cachedArr.includes(arguments[0])) return cachedArr;
        cachedArr.push(arguments[0]);

        return cachedArr;
    }

}

const cachedFunc = getCache();
console.group('task4: ');
console.log(cachedFunc(concatFunc('foo', 'bar')));
console.log(cachedFunc(concatFunc('foo', 'bar')));
console.groupEnd();