import { getImages } from './getImage';
import { getPreviousPage, getNextPage, paginations } from './pagination';
import '../style.css';
import { elementsDom } from './initial';

window.addEventListener('DOMContentLoaded', getImages);
elementsDom.UL_TAG.addEventListener('click', paginations);
elementsDom.PREVIOUS_BUTTON.addEventListener('click', getPreviousPage);
elementsDom.NEXT_BUTTON.addEventListener('click', getNextPage);