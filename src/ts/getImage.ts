import { elementsDom, initial } from './initial';
import { paginations } from './pagination';
import { getBigImage } from './clickImage';
import axios from 'axios';

export async function getImages(): Promise<void> {
    try {
        const { data } = await axios.get(initial.DOG_API);

        data.message.forEach((element: never) => initial.apiArray.push(element));
    } catch (err) {
        console.error('api fail: ', err);
    } finally {
        const page = initial.apiArray.length - 1;
        renderNumbersOfImage(page);
    }

}

function renderNumbersOfImage(numbers: number): void {

    numbers = numbers / initial.itemsOnPage;
    const li = elementsDom.templateIdTemplateImageList.cloneNode(true);

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
    const divElement = elementsDom.templateIdTemplateImageContainer;
    divElement.cloneNode(true)
    for (const item of array) {
        if (countId === initial.itemsOnPage) return;
        countId++;

        divElement.id = countId;
        divElement.IMG.id = `image-${countId}`;
        divElement.IMG.src = item;
        elementsDom.divContainerImg.prepend(divElement);
        divElement.prepend(divElement.IMG);
        for (const item of elementsDom.IMG) {
            item.addEventListener('click', getBigImage);
        }
    }
}
