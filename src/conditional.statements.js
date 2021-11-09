// 1.Если а – четное посчитать а*б, иначе а+б
function getMultyOrSum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {

        return a % 2 === 0 ? a * b : a + b;
    }
    return;
}

console.log('task1:', getMultyOrSum(5, 3));

//2.Определить какой четверти принадлежит точка с координатами (х,у)

function defineAQuarter(x, y) {

    if (typeof x === "number" && typeof y === "number") {
        switch (true) {
            case x > 0 && y > 0:
                return 'first quarter';
            case x < 0 && y > 0:
                return 'second quarter';
            case x < 0 && y < 0:
                return 'thrird quarter';
            case x > 0 && y < 0:
                return 'fourth quarter';
        }
    }
    return;
}

console.log('task2:', defineAQuarter(-10, 20));

//3.Найти суммы только положительных из трех чисел

function getSumPositiv(numberOne, numberTwo, numberThree) {

    if (typeof numberOne === 'number', typeof numberTwo === 'number', typeof numberThree === 'number') {

        switch (true) {
            case (numberOne < 0 && numberTwo < 0 && numberThree < 0):
            return 0;
            case numberOne < 0:
                return numberTwo + numberThree;
            case numberTwo < 0:
                return numberOne + numberThree;
            case numberThree < 0:
                return numberOne + numberTwo;
            default:
                return numberOne + numberTwo + numberThree;
        }
    }
    return;
}

console.log('task3:', getSumPositiv(10, 20, 10));

//4.Посчитать выражение (макс(а*б*с, а+б+с))+3

function CountMaxExpression(a, b, c) {

    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        return (Math.max(a * b * c, a + b + c)) + 3;
    }
    return;
}

console.log('task4:', CountMaxExpression(2, 3, 4));

//5.Написать программу определения оценки студента по его рейтингу

function getMarkOfStudentsRating(rating) {

    if (typeof rating === "number" && rating >= 0) {

        switch (true) {
            case rating >= 0 && rating <= 19:
                return 'F';
            case rating >= 20 && rating <= 39:
                return 'E';
            case rating >= 40 && rating <= 59:
                return 'D';
            case rating >= 60 && rating <= 74:
                return 'C';
            case rating >= 75 && rating <= 89:
                return 'B';
            case rating >= 90 && rating <= 100:
                return 'A';
        }
    }
    return;
}
console.log('task5: mark:', getMarkOfStudentsRating(100));

