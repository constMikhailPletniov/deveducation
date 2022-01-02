import '../style.css';
import { domElements } from './domElements';
import { config } from './config';
import { getSaveTask, addNewTask, removeTask } from './tasks';
import { startDrag, allowDrop, dropElement } from './drag.drop';

document.addEventListener('DOMContentLoaded', getSaveTask);
domElements.buttonIdAdToDoBtn.addEventListener(config.CLICK, addNewTask);
document.addEventListener('dragstart', startDrag, false);
document.addEventListener('dragover', allowDrop, false);
document.addEventListener('drop', dropElement, false);
document.addEventListener('contextmenu', removeTask);

