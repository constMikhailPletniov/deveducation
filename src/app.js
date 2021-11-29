import elementsOfDom from './elements';
import Controller from './controller/controller';
import Model from './model/model';
import View from './view/view';
import './style.css';

let count = new Date();

document.addEventListener('DOMContentLoaded', getStorageData);
elementsOfDom.formIdFormToDo.addEventListener('submit', getFormAction);
elementsOfDom.ulClassLisstPlans.addEventListener('click', getPlansItem);

export function getStorageData() {
    const items = new Controller(null, null);

    return items.getDataFromLocalStorage();
}



export function getFormAction(e) {
    e.preventDefault();
    if (!e.target.children[0].value) return;

    count++;
    const action = new Controller(e.target.children[0].value, count);
    e.target.children[0].value = '';
    return action.getFormValue();
}

export function getPlansItem(e) {
    if (e.target.className === 'btnDelete') {
        const action = new Controller(e.target.id);
        return action.removePlansItem();
    }
    return;
}

