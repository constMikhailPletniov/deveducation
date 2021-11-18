
export function getBigImage() {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const button = document.createElement('button');

    div.className = 'big-image-container';
    img.className = 'big-image-item';
    button.className = 'buttons';
    button.textContent = 'Remove';
    button.id = 'remove-btn';
    divContainerImg.prepend(div);
    div.prepend(img);
    div.prepend(button);
    img.src = this.src;

    const BUTTON_REMOVE_BIG_IMAGE = document.getElementById('remove-btn');
    BUTTON_REMOVE_BIG_IMAGE.addEventListener('click', removeBigImageBtn);
}
export function removeBigImageBtn(e) {
    return e.target.parentElement.style.display = 'none';

}

