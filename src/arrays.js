//1. Найти минимальный элемент массива
function getMinElement(array) {

    if (Array.isArray(array)) {

        return Math.min(...array);
    }
    return;
}
console.log('task1:', getMinElement([-1, 0, 1]));

//2.Найти максимальный элемент массива

function getMaxElement(array) {

    if (Array.isArray(array)) {

        return Math.max(...array);
    }
    return;
}
console.log('task2', getMaxElement([-1, 0, 1]));

//3.Найти индекс минимального элемента массива

function getIndexOfMinElement(array) {

    if (Array.isArray(array)) {

        return array.indexOf(Math.min(...array));
    }
    return;
}
console.log('task3:', getIndexOfMinElement([3, 2, 3]));

//4.Найти индекс максимального элемента массива

function getIndexOfMaxElement(array) {

    if (Array.isArray(array)) {


        return array.indexOf(Math.max(...array));
    }
    return;
}
console.log('task4:', getIndexOfMaxElement([1, 2, 3]));

//5.Посчитать сумму элементов массива с нечетными индексами

function getSumOfOddIndex(array) {

    if (Array.isArray(array)) {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {

            if (i % 2 !== 0) {
                sum += array[i];
            }
        }
        return sum;
    }
    return;
}
console.log('task5:', getSumOfOddIndex([1, 2, 3, 4, 5, 4]));

//6.Сделать реверс массива (массив в обратном направлении)

function getReverseArray(array) {

    if (Array.isArray(array)) {

        return array.reverse();
    }
    return;
}
console.log('task6:', getReverseArray([1, 2, 3]));

//7.Посчитать количество нечетных элементов массива

function getNumberOfOddElemets(array) {

    let sum = 0;

    if (Array.isArray(array)) {

        for (let i = 0; i < array.length; i++) {

            if (i % 2 !== 0) {
                sum += i;
            }

        }
        return sum;
    }
    return;
}
console.log('task7:', getNumberOfOddElemets([1, 2, 3]));

/*8.Поменять местами первую и вторую половину массива, например, для массива 
1 2 3 4, результат 3 4 1 2*/

function changeArray(array) {

    if (Array.isArray(array)) {

        const firstPart = array.slice(0, array.length / 2);
        const secondPart = array.slice(array.length / 2, array.length);

        const arrayConcat = secondPart.concat(firstPart);

        return arrayConcat;
    }
    return;
}
console.log('task8:', changeArray([1, 2, 3, 4, 5]));

//9.Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

function sortArray(array) {
    let temp;

    if (Array.isArray(array)) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {

                if (array[i] > array[j]) {
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
    }

    return;
}

console.log('task9: ', sortArray([3, 2, 1, 4]));