import { elementsDom, initial } from './initial';
import { printImages } from './getImage';

export function paginations(this: HTMLElement, e: Event): void {
    for (const item of this.children) {
        item.classList.remove('active');
    }
    (<HTMLElement>e.target).classList.add('active');
    getPieceOfArray(Number((<HTMLElement>e.target).textContent));
}
export function getPreviousPage(): void {
    let prev = 0;
    for (let i = elementsDom.UL_TAG.children.length - 1; i >= 0; i--) {
        if (elementsDom.UL_TAG.children[i].className === 'active') {
            elementsDom.UL_TAG.children[i].classList.remove('active');
            i--;
            if (elementsDom.UL_TAG.children[i] === undefined) {
                i = elementsDom.UL_TAG.children.length - 1;
            }
            elementsDom.UL_TAG.children[i].classList.add('active');
            prev = Number(elementsDom.UL_TAG.children[i].innerHTML);
        }
    }
    getPieceOfArray(prev);

}

export function getNextPage(): void {
    let current = 0;
    for (let i = 0; i < elementsDom.UL_TAG.children.length; i++) {
        if (elementsDom.UL_TAG.children[i].className === 'active') {
            elementsDom.UL_TAG.children[i].classList.remove('active');
            i++;
            if (elementsDom.UL_TAG.children[i] === undefined) {
                i = 0;
            }
            elementsDom.UL_TAG.children[i].classList.add('active');
            current = Number(elementsDom.UL_TAG.children[i].innerHTML);
        }
    }
    getPieceOfArray(current);
}

export function getPieceOfArray(current: number): void {
    const start = (current - 1) * initial.itemsOnPage;
    const end = start + initial.itemsOnPage;

    const numberOfItems = initial.apiArray.slice(start, end);
    printImages(numberOfItems);
}
