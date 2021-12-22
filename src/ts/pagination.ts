// import { elementsDom, initial } from './initial';
// import { printImages } from './getImage';

// export function paginations(this: HTMLElement): void {
//     for (const item of elementsDom.LI_TAG) {
//         item.classList.remove('active');
//     }
//     this.classList.add('active');
//     getPieceOfArray(Number(this.textContent));
// }
// export function getPreviousPage(): void {
//     let prev = 0;

//     for (let i = elementsDom.LI_TAG.length - 1; i >= 0; i--) {
//         if (elementsDom.LI_TAG[i].className === 'active') {
//             elementsDom.LI_TAG[i].classList.remove('active');
//             i--;
//             if (elementsDom.LI_TAG[i] === undefined) {
//                 i = elementsDom.LI_TAG.length - 1;
//             }
//             elementsDom.LI_TAG[i].classList.add('active');
//             prev = Number(elementsDom.LI_TAG[i].innerHTML);
//         }
//     }
//     getPieceOfArray(prev);

// }

// export function getNextPage(): void {
//     let current = 0;
//     for (let i = 0; i < elementsDom.LI_TAG.length; i++) {
//         if (elementsDom.LI_TAG[i].className === 'active') {
//             elementsDom.LI_TAG[i].classList.remove('active');
//             i++;
//             if (elementsDom.LI_TAG[i] === undefined) {
//                 i = 0;
//             }
//             elementsDom.LI_TAG[i].classList.add('active');
//             current = Number(elementsDom.LI_TAG[i].innerHTML);
//         }
//     }

//     getPieceOfArray(current);
// }

// export function getPieceOfArray(current: number): void {

//     const start = (current - 1) * initial.itemsOnPage;
//     const end = start + initial.itemsOnPage;

//     const numberOfItems = initial.apiArray.slice(start, end);

//     printImages(numberOfItems);
// }
