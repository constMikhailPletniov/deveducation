import Model from '../model/model';

export default class Controller {
    constructor(action, count) {
        this.action = action;
        this.count = count;
    }
    getFormValue() {
        const formValue = new Model(this.action, this.count);
        return formValue.addPlans();
    }
    removePlansItem() {
        const plansItem = new Model(this.action);
        return plansItem.removeItemById();
    }
    getDataFromLocalStorage() {
        const accKey = [];
        const accValue = [];
        for (let i = 0; i < localStorage.length; i++) {
            accKey.push(localStorage.key(i));
            accValue.push(localStorage.getItem(localStorage.key(i)))

        }
        for (const key of Object.keys(localStorage)) {

            const localData = new Model(localStorage[key], Number(key));
            localData.addPlans();
        }

    }
}