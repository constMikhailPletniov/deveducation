import { printImages, getImages } from './getImage';
import './clickImage';
import { getPreviousPage, getNextPage } from './pagination';
import './style.css';
import { initial } from './initial';
window.addEventListener('DOMContentLoaded', getImages);
initial.PREVIOUS_BUTTON.addEventListener('click', getPreviousPage);
initial.NEXT_BUTTON.addEventListener('click', getNextPage);