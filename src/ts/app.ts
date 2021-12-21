import { getImages } from './getImage';
import './clickImage';
import { getPreviousPage, getNextPage } from './pagination';
import '../style.css';
import { elementsDom } from './initial';

window.addEventListener('DOMContentLoaded', getImages);
elementsDom.PREVIOUS_BUTTON.addEventListener('click', getPreviousPage);
elementsDom.NEXT_BUTTON.addEventListener('click', getNextPage);