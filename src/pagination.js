
function paginations() {
    for (const item of LI_TAG) {
        item.classList.remove('active');
    }
    this.classList.add('active');
    return getPieceOfArray(this.textContent);
}
function getPreviousPage() {
    let prev;

    for (let i = LI_TAG.length - 1; i >= 0; i--) {
        if (LI_TAG[i].className === 'active') {
            LI_TAG[i].classList.remove('active');
            i--;
            if (LI_TAG[i] === undefined) {
                i = LI_TAG.length - 1;
            }
            LI_TAG[i].classList.add('active');
            prev = Number(LI_TAG[i].innerHTML);
        }
    }

    return getPieceOfArray(prev);

}

function getNextPage() {
    let current;
    for (let i = 0; i < LI_TAG.length; i++) {
        if (LI_TAG[i].className === 'active') {
            LI_TAG[i].classList.remove('active');
            i++;
            if (LI_TAG[i] === undefined) {
                i = 0;
            }
            LI_TAG[i].classList.add('active');
            current = Number(LI_TAG[i].innerHTML);
        }
    }

    return getPieceOfArray(current);
}

function getPieceOfArray(current) {

    let start = (current - 1) * itemsOnPage;
    let end = start + itemsOnPage;

    let numberOfItems = apiArray.slice(start, end);

    return printImages(numberOfItems);
}
