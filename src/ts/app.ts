import '../style.css';
import { domElements } from './domElements';
import { config } from './config';
import { getSaveTask, addNewTask } from './tasks';
import { startDrag, allowDrop, dropElement } from './drag.drop';

document.addEventListener('DOMContentLoaded', getSaveTask);
domElements.buttonIdAdToDoBtn.addEventListener(config.CLICK, addNewTask);
document.addEventListener('dragstart', startDrag, false);
document.addEventListener('dragover', allowDrop, false);
document.addEventListener('drop', dropElement, false);
// domElements.divClassContainerToDoList.addEventListener('dragover', allowDrop, false);
// domElements.divClassContainerToDoList.addEventListener('drop', drop);
// domElements.divClassContainerInProgress.addEventListener('dragover', allowDrop, false);
// domElements.divClassContainerInProgress.addEventListener('drop', drop);
// domElements.divClassContainerDone.addEventListener('dragover', allowDrop, false);
// domElements.divClassContainerDone.addEventListener('drop', drop);

