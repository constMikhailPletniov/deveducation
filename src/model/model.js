import View from '../view/view';


export default class Model {
    constructor(data, count) {
        this.data = data;
        this.count = count;
    }
    addPlans() {
        const renderData = new View(this.data, this.count);
        return renderData.createDomElements();
    }
    removeItemById() {
        const renderChange = new View(this.data);
        return renderChange.removeDomElementById();
    }

}