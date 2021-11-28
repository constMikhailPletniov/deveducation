import elementsOfDom from "../elements";

export default class View {
    constructor(data, count) {
        this.data = data;
        this.count = count;
    }

    createDomElements() {
        const divElement = document.createElement('div');
        const liElement = document.createElement('li');
        const buttonElement = document.createElement('button');
        const inputCheckElement = document.createElement('input');
        const paragraphElement = document.createElement('p');

        this.addChanges(divElement, inputCheckElement, buttonElement, paragraphElement)
        this.addDomElements(liElement, divElement, paragraphElement, inputCheckElement, buttonElement);
        this.addDataToLocalStorage(this.count, this.data);
    }
    addChanges(firstElem, secondElem, thrirdElement, fourtyElement) {
        firstElem.className = 'plansItem';
        firstElem.id = `plansItem-${this.count}`;
        secondElem.type = 'checkbox';
        thrirdElement.className = 'btnDelete';
        thrirdElement.id = `${this.count}`;
        thrirdElement.title = 'Click for delete the plan';
        thrirdElement.textContent = 'Delete';
        fourtyElement.textContent = this.data;
        fourtyElement.contenteditable = true;
    }

    addDomElements(firstElem, secondElem, thrirdElement, fourtyElement, fiftyElement) {
        elementsOfDom.ulClassLisstPlans.prepend(firstElem);
        firstElem.prepend(secondElem, fourtyElement, fiftyElement);
        secondElem.prepend(thrirdElement);
    }
    addDataToLocalStorage(id, data) {
        localStorage.setItem(id, data);
    }

    removeDomElementById() {
        for (const item of elementsOfDom.allButtonClassBtnDelete) {
            if (item.id === this.data) {
                item.parentElement.remove();
                this.removeDataFromLocalStorage(this.data)
            }
        }
    }
    removeDataFromLocalStorage(id) {
        localStorage.removeItem(id);
    }

}
