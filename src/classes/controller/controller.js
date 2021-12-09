

import Model from '../model/model';

const model = new Model();

export default class Controller {
    getButtonsActions() {
        return model.changeImages(this.id);

    };

}