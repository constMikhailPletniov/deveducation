
export const initial = {
    DOG_API: 'https://dog.ceo/api/breed/hound/images',
    JSON_PLACEHOLDER_API: 'https://jsonplaceholder.typicode.com/photos?_limit=50',
    apiArray: [],
    divContainerImg: document.querySelector('.container-images'),
    DIV_PAGINATION: document.querySelector('.pagination'),
    UL_TAG: document.querySelector('ul'),
    LI_TAG: document.getElementsByTagName('li'),
    itemsOnPage: 16,
    PREVIOUS_BUTTON: document.querySelector('#btn-previous'),
    NEXT_BUTTON: document.querySelector('#btn-next'),
    IMG: document.getElementsByClassName('image-item'),
    BIG_IMAGE_DIV: document.querySelector('.big-image-container')
};
