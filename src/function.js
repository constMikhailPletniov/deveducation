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

        const result = Number((((x2 - x) ** 2 + (y2 - y) ** 2) ** 0.5).toFixed(2));

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

   const numberObject = {
       'one': 1,
       'two': 2,
       'three': 3,
       'four': 4,
       'five': 5,
       'six': 6,
'seven': 7,
'eight': 8,
'nine': 9,
'ten': 10,
'eleven': 11,
'twelve': 12,
'thirteen': 13,
'fourteen': 14,
'fifteen': 15,
'sixteen': 16,
'seventeen': 17,
'eighteen': 18,
'nineteen': 19,
'twenty': 20,
'thirty': 30,
'forty':40,
'fifty':50,
'sixty':60,
'seventy':70,
'eighty':80,
'ninety':90
   }

   if( !number === 'string') return;
   const array = [];
   const numWords = number.split(' ').map(i => i.trim());

   for(let i = 0; i < numWords.length; i++){
    if(numWords[i]=== 'hundred'){
        array[i - 1] * 100;
        continue;
    }
    if(numberObject.hasOwnProperty(numWords[i])){
        array.push(numberObject[numWords[i]]);
    };
    return array;
}
console.log(array);
  
   return array.reduce((acc, curr) => {
return acc += curr;
   },0);

}
console.log('task4:', getNumberFromString('one hundred one'));


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




