//1. Получить строковое название дня недели по номеру дня. 
function getNameOfDayOfWeek(numberOfDay) {

    if (typeof numberOfDay === 'number' && numberOfDay >= 1 && numberOfDay <= 7) {

        switch (true) {
            case numberOfDay === 1:
                return 'Monday';
            case numberOfDay === 2:
                return 'Tuesday';
            case numberOfDay === 3:
                return 'Wednesday';
            case numberOfDay === 4:
                return 'Thursday';
            case numberOfDay === 5:
                return 'Friday';
            case numberOfDay === 6:
                return 'Saturday';
            case numberOfDay === 7:
                return 'Sunday';
        }
    }

    return;
}
console.log('task1:', getNameOfDayOfWeek(7));

//2.Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function getDistance(x, y, x2, y2) {

    if (typeof x === 'number' && typeof y === 'number' && typeof y2 === 'number' && typeof x2 === 'number') {

        const result = ((x2 - x) ** 2 + (y2 - y) ** 2) ** 0.5;

        return result;
    }
    return;
}
console.log('task2:', getDistance(3, 4, 5, 6));

//3.Вводим число(0-999), получаем строку с прописью числа.

function getNameOfNumber(number) {

    const arrCountUnits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const arrCountTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const arrCountTeens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (typeof number === 'number' && number > 0) {

        if (number >= 100 && number < 1000) {
            return arrCountUnits[Math.floor(number / 100)] + " hundred " + convertBeforeHundred(number % 100);
        } else {
            return convertBeforeHundred(number);
        }

        function convertBeforeHundred(number) {
            if (number < 10) {
                return arrCountUnits[number];
            } else if (number >= 10 && number < 20) {
                return arrCountTeens[(number - 10)];
            } else {
                return arrCountTens[Math.floor(number / 10) - 2] + " " + arrCountUnits[number % 10];
            }

        }
    }
    return;

}
console.log('task3: ', getNameOfNumber(1));

//4.Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

function getNumberFromString(number) {

    const arrCountUnits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const arrCountTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const arrCountTeens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arrNumberOnes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrNumberTeens = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    const arrNumberTens = [20, 30, 40, 50, 60, 70, 80, 90];

    if (typeof number === 'string') {

        number = number.trim().split(' ');

        for (let k = 0; k < number.length; k++) {
            console.log(number);
            if (number[k] === 'hundred' && number.length === 2) {
                return Number(getNumberBeforeHundred(number[k - 1]) + '00');
            } else if (number[k] === 'hundred' && number.length === 3) {
                return getNumberBeforeHundred(number[k - 1]) + '0' + getNumberBeforeHundred(number[k + 1]);
            }
            return getNumberBeforeHundred(number[k]);

        }

        function getNumberBeforeHundred(number) {

            for (let i = 0; i < arrCountUnits.length; i++) {

                if (number === arrCountUnits[i]) {

                    for (let j = 0; j < arrNumberOnes.length; j++) {
                        if (i === j) return arrNumberOnes[j];
                    }
                }
            }
            for (let i = 0; i < arrCountTeens.length; i++) {

                if (number === arrCountTeens[i]) {
                    for (let j = 0; j < arrNumberTeens.length; j++) {
                        if (i === j) return arrNumberTeens[j];
                    }
                }
            }
            for (let i = 0; i < arrCountTens.length; i++) {

                if (number === arrCountTens[i]) {
                    for (let j = 0; j < arrNumberTens.length; j++) {
                        if (i === j) return arrNumberTens[j];
                    }
                }
            }
        }

    }
    return;
}
console.log('task4:', getNumberFromString('ninety'));


function getNameOfNumberToTrillion(number) {

    const arrCountUnits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const arrCountTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const arrCountTeens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


    if (typeof number === 'number' && number > 0) {

        if (number >= 1000000000 && number < 1000000000000) {
            return convertBeforeThousand(Math.floor(number / 1000000000)) + ' billion(s) ' + convertBeforeBillion(number % 1000000000);
        } else {
            return convertBeforeBillion(number);
        }

        function convertBeforeBillion(number) {
            if (number >= 1000000 && number < 1000000000) {
                return convertBeforeThousand(Math.floor(number / 1000000)) + ' million(s) ' + convertBeforeMillion(number % 1000000);
            } else {
                return convertBeforeMillion(number);
            }
        }

        function convertBeforeMillion(number) {
            if (number >= 1000 && number < 1000000) {
                return convertBeforeThousand(Math.floor(number / 1000)) + ' thousand(s) ' + convertBeforeThousand(number % 1000);
            } else {
                return convertBeforeThousand(number);
            }
        }

        function convertBeforeThousand(number) {
            if (number >= 100 && number < 1000) {
                return arrCountUnits[Math.floor(number / 100)] + ' hundred ' + convertBeforeHundred(number % 100);
            } else {
                return convertBeforeHundred(number);
            }
        }

        function convertBeforeHundred(number) {
            if (number < 10) {
                return arrCountUnits[number];
            } else if (number >= 10 && number < 20) {
                return arrCountTeens[(number - 10)];
            } else {
                return arrCountTens[Math.floor(number / 10) - 2] + " " + arrCountUnits[number % 10];
            }

        }
    }
    return;
}
console.log('task5 :', getNameOfNumberToTrillion(2743));




