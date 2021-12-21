import { elementsDom } from './initial';

export function getBigImage(): void {

    elementsDom.divContainerImg.prepend(div);
    div.prepend(img);
    div.prepend(button);
    img.src = this.src;

    const BUTTON_REMOVE_BIG_IMAGE = <HTMLElement>document.getElementById('remove-btn');
    BUTTON_REMOVE_BIG_IMAGE.addEventListener('click', removeBigImageBtn);
}
export function removeBigImageBtn(e: Event): void {
    (<HTMLElement>e.target).parentElement.style.display = 'none';

}