let minValue = 0;
let maxValue = 0;
let getRandomValue = 0;
let arrayRandomValue = [];
let removeArray = [];


document.querySelector('#range-max').addEventListener('change', (e) => {
    document.querySelector('.out-range-max').textContent = e.target.value;
});
document.querySelector('#range-min').addEventListener('change', (e) => {
    document.querySelector('.out-range-min').textContent = e.target.value;
});

document.querySelector('#randomizer').addEventListener('submit', (e) => {
    e.preventDefault();
    minValue = Number(document.querySelector('#range-min').value);
    maxValue = Number(document.querySelector('#range-max').value);
    document.querySelector('#range-max').disabled = true;
    document.querySelector('#range-min').disabled = true;

    if (minValue < maxValue) {
        for (let i = minValue; i <= maxValue; i++) {
            arrayRandomValue.push(i);
        }
        document.querySelector('.out-generate').textContent = `You generate numbers from ${minValue} to ${maxValue}`;
        return document.querySelector('#input-generate').style.display = 'none', document.querySelector('#btn-generate').style.display = 'block';

    } else if (minValue > maxValue) {
        return document.querySelector('.out-generate').textContent = 'Do You studied mathmethics? You Minimum more than Maximum';
    } else {
        return document.querySelector('.out-generate').textContent = `Your minimum value equal maximum value, I don't game so`;
    }
});

document.querySelector('#btn-generate').addEventListener('click', (event) => {
    event.stopImmediatePropagation();

    getRandomValue = random(minValue, maxValue);
    let removeItem = arrayRandomValue.includes(getRandomValue);

    if (removeItem) {
        document.querySelector('.out-generate').textContent = `Generated number: ${getRandomValue}`;
        for (let i = 0; i < arrayRandomValue.length; i++) {

            if (getRandomValue === arrayRandomValue[i]) {
                removeArray = arrayRandomValue.splice(i, 1);
            }
        }
    }
    else if (arrayRandomValue.length === 0) {
        document.querySelector('#btn-generate').disabled = true;
        document.querySelector('.out-generate').textContent = 'Generated number: Elements are over';
    }
    return;
});

document.querySelector('.btn-reset').addEventListener('click', () => {
    minValue = 0;
    maxValue = 0;
    getRandomValue = 0;
    arrayRandomValue = [];
    removeArray = [];

    document.querySelector('#range-max').value = '2';
    document.querySelector('#range-min').value = '1';
    document.querySelector('.out-generate').textContent = '';
    document.querySelector('.out-range-max').textContent = '2';
    document.querySelector('.out-range-min').textContent = '1';
    document.querySelector('#btn-generate').disabled = false;
    document.querySelector('#range-max').disabled = false;
    document.querySelector('#range-min').disabled = false;
    document.querySelector('#input-generate').style.display = 'block';
    document.querySelector('#btn-generate').style.display = 'none';

});




function random(min, max) {

    if (typeof min === 'number' &&
        typeof max === 'number' &&
        min > 0 &&
        max > 1 &&
        min < 10 &&
        max <= 10 &&
        max > min &&
        min === min &&
        max === max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return;
}