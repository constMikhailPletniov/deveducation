import { elementsDom, initial } from './initial';
// import { paginations } from './pagination';
// import { getBigImage } from './clickImage';
import axios from 'axios';
require("babel-core/register");
require("babel-polyfill");

export async function getImages(): Promise<void> {
    try {
        const { data } = await axios.get(initial.DOG_API);

        data.message.forEach((element: never) => initial.apiArray.push(element));
        console.log('api: ', initial.apiArray);
    } catch (err) {
        console.error('api fail: ', err);
    } finally {
        const page = initial.apiArray.length - 1;
        renderNumbersOfImage(page);
    }

}

function renderNumbersOfImage(numbers: number): string {
    const arr = [];
    numbers = numbers / initial.itemsOnPage;

    for (let i = 1; i <= numbers; i++) {
        arr.push(elementsDom.templateIdTemplateImageList.replace('{{item}}', `${i}`));
    }
    return elementsDom.UL_TAG.innerHTML = arr.map(item => item).join('');

}

// export function printImages(array: Array<string>): void {

//     if (elementsDom.divContainerImg.children.length !== 0) {
//         elementsDom.divContainerImg.innerHTML = '';
//     }
//     let countId = 0;
//     const divElement = elementsDom.templateIdTemplateImageContainer;

//     for (const item of array) {
//         if (countId === initial.itemsOnPage) return;
//         countId++;

//         divElement.querySelector('div').id = countId;
//         divElement.IMG.id = `image-${countId}`;
//         divElement.IMG.src = item;
//         elementsDom.divContainerImg.prepend(divElement);
//         divElement.prepend(divElement.IMG);
//         for (const item of elementsDom.IMG) {
//             item.addEventListener('click', getBigImage);
//         }
//     }
// }
