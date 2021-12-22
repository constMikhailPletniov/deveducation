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
    } catch (err) {
        console.error('api fail: ', err);
    } finally {
        const page = initial.apiArray.length - 1;
        renderNumbersOfImage(page);
        printImages(initial.apiArray);
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
const printImagesArr: Array<string> = [];
export function printImages(array: Array<string>): string | void {
    console.log(array);
    if (elementsDom.divContainerImg.children.length !== 0) {
        elementsDom.divContainerImg.innerHTML = '';
    }
    let countId = 0;
    for (const item of array) {
        console.log(item);
        if (countId === initial.itemsOnPage) return elementsDom.divContainerImg.innerHTML = printImagesArr.map(item => item).join('');
        countId++;
        console.log(printImagesArr);
        printImagesArr.push(elementsDom.templateIdTemplateImageContainer.replace('{{id}}', `${countId}`)
            .replace('{{item}}', `${item}`).replace('{{image-id}}', `image-${countId}`));
    }
}
