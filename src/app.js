import './style.css';
import Controller from './classes/controller/controller';
import View from './classes/view/view';
import { domElements } from './config/domElements';

const controller = new Controller;
const view = new View();

document.addEventListener('DOMContentLoaded', view.showImageByInterval.bind(view));

domElements.buttonIdNextBtn.addEventListener('click', controller.getButtonsActions);
domElements.buttonIdControllBtn.addEventListener('click', controller.getButtonsActions);
domElements.buttonIdPrevBtn.addEventListener('click', controller.getButtonsActions);
