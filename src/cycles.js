//1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99 
function getSumEvenAndOddNumbers() {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < 100; i++) {

        if (i % 2 === 0) {
            evenCount += i;
        } else {
            oddCount += i;
        }

    }
    return `Summ even:${evenCount}, summ Odd: ${oddCount}`;
}
console.log('task1:', getSumEvenAndOddNumbers());

//2.Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function checkIsSimpleNumber(number) {

    let count = 0;

    if (typeof number === 'number' && number > 0) {
        for (let i = 1; i <= number; i++) {

            if (number % i === 0) {
                count++;
            }
        }
        if (count === 2) {
            return true;
        }
        return false;
    }

    return;
}

console.log('task2:', checkIsSimpleNumber(11));

//3.Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

function getRootOfNativeNumber(number) {

    if (typeof number === 'number' && number > 0) {
        return Math.trunc(number ** 0.5);
    }
    return;
}
console.log('task3:', getRootOfNativeNumber(49));

//4.Вычислить факториал числа n. n! = 1*2*…*n-1*n;


function calcFactorial(number) {
    let count = 1;
    if (typeof number === 'number' && number > 0) {
        for (let i = 1; i <= number; i++) {

            count *= i;
        }
        return count;
    }
    return;
}
console.log('task4: ', calcFactorial(5));

//5.Посчитать сумму цифр заданного числа

function calcSumOfNumber(number) {
    let count = 0;

    if (typeof number === "number") {

        for (let i = 0; i <= number; i++) {
            count += i;
        }

        return count;
    }
    return;
}
console.log('task5:', calcSumOfNumber(10));

//6.Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

function showMirrorNumbers(number) {

    if (typeof number === 'number') {
        let mirrorNumber = number.toString().split('').reverse().join('');
        mirrorNumber = +mirrorNumber;
        return mirrorNumber;
    }
    return;
}
console.log('task6:', showMirrorNumbers(123));



