import { getImages } from './getImage';
import { getNextPage, getPreviousPage } from './pagination';

export default function app() {
    const DOG_API = 'https://dog.ceo/api/breed/hound/images';
    const JSON_PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com/photos?_limit=50';
    const apiArray = [];
    const divContainerImg = document.querySelector('.container-images');
    const DIV_PAGINATION = document.querySelector('.pagination');
    const UL_TAG = document.querySelector('ul');
    const LI_TAG = document.getElementsByTagName('li');
    const itemsOnPage = 16;
    const PREVIOUS_BUTTON = document.querySelector('#btn-previous');
    const NEXT_BUTTON = document.querySelector('#btn-next');
    const IMG = document.getElementsByClassName('image-item');
    const BIG_IMAGE_DIV = document.querySelector('.big-image-container');

    window.addEventListener('DOMContentLoaded', getImages);
    PREVIOUS_BUTTON.addEventListener('click', getPreviousPage);
    NEXT_BUTTON.addEventListener('click', getNextPage);
}


