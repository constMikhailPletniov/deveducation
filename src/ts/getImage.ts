import { initial } from './initial';
import { paginations } from './pagination';
import { getBigImage } from './clickImage';

export async function getImages() {
    try {
        await fetch(initial.DOG_API)
            .then(res => res.json())
            .then(data => data.message.forEach(element => initial.apiArray.push(element)));
    } catch (err) {
        console.log('api fail: ', err);
    } finally {
        const page = initial.apiArray.length - 1;
        renderNumbersOfImage(page);
    }

}

function renderNumbersOfImage(numbers) {

    numbers = numbers / initial.itemsOnPage;

    for (let i = 1; i <= numbers; i++) {
        let li = document.createElement('li');
        li.textContent = `${i}`;
        initial.UL_TAG.append(li);
    }
    for (const item of initial.LI_TAG) {
        item.addEventListener('click', paginations);
    }
}

export function printImages(array) {

    if (initial.divContainerImg.children.length !== 0) {
        initial.divContainerImg.innerHTML = '';
    }
    let countId = 0;
    for (const item of array) {
        if (countId === initial.itemsOnPage) return;
        countId++;
        const div = document.createElement('div');
        const img = document.createElement('img');

        div.className = 'image-container';
        div.id = countId;
        img.className = 'image-item';
        img.id = `image-${countId}`;
        img.src = item;
        initial.divContainerImg.prepend(div);
        div.prepend(img);
        for (const item of initial.IMG) {
            item.addEventListener('click', getBigImage);
        }
    }
}