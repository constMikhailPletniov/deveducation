import { initial } from './initial';
import { printImages } from './getImage';

export function paginations() {
    for (const item of initial.LI_TAG) {
        item.classList.remove('active');
    }
    this.classList.add('active');
    return getPieceOfArray(this.textContent);
}
export function getPreviousPage() {
    let prev;

    for (let i = initial.LI_TAG.length - 1; i >= 0; i--) {
        if (initial.LI_TAG[i].className === 'active') {
            initial.LI_TAG[i].classList.remove('active');
            i--;
            if (initial.LI_TAG[i] === undefined) {
                i = initial.LI_TAG.length - 1;
            }
            initial.LI_TAG[i].classList.add('active');
            prev = Number(initial.LI_TAG[i].innerHTML);
        }
    }

    return getPieceOfArray(prev);

}

export function getNextPage() {
    let current;
    for (let i = 0; i < initial.LI_TAG.length; i++) {
        if (initial.LI_TAG[i].className === 'active') {
            initial.LI_TAG[i].classList.remove('active');
            i++;
            if (initial.LI_TAG[i] === undefined) {
                i = 0;
            }
            initial.LI_TAG[i].classList.add('active');
            current = Number(initial.LI_TAG[i].innerHTML);
        }
    }

    return getPieceOfArray(current);
}

export function getPieceOfArray(current) {

    let start = (current - 1) * initial.itemsOnPage;
    let end = start + initial.itemsOnPage;

    let numberOfItems = initial.apiArray.slice(start, end);

    return printImages(numberOfItems);
}
