import { elementsDom, initial } from './initial';
import { paginations } from './pagination';
import { getBigImage } from './clickImage';
import axios from 'axios';

export async function getImages(): Promise<void> {
    try {
        const { data } = await axios.get(initial.DOG_API);

        data.message.forEach((element: string) => initial.apiArray.push(element));
    } catch (err) {
        console.log('api fail: ', err);
    } finally {
        const page = initial.apiArray.length - 1;
        renderNumbersOfImage(page);
    }

}

function renderNumbersOfImage(numbers: number): void {

    numbers = numbers / initial.itemsOnPage;
    elementsDom.templateIdTemplateImageList.cloneNode(true)

    for (let i = 1; i <= numbers; i++) {
        li.textContent = `${i}`;
        elementsDom.UL_TAG.append(li);
    }
    for (const item of elementsDom.LI_TAG) {
        item.addEventListener('click', paginations);
    }
}

export function printImages(array: Array<string>): void {

    if (elementsDom.divContainerImg.children.length !== 0) {
        elementsDom.divContainerImg.innerHTML = '';
    }
    let countId = 0;
    for (const item of array) {
        if (countId === initial.itemsOnPage) return;
        countId++;

        div.id = countId;
        img.className = 'image-item';
        img.id = `image-${countId}`;
        img.src = item;
        elementsDom.divContainerImg.prepend(div);
        div.prepend(img);
        for (const item of elementsDom.IMG) {
            item.addEventListener('click', getBigImage);
        }
    }
}