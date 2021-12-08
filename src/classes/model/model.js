import { constants } from '../../config/constants';
import { domElements } from '../../config/domElements';
import View from '../view/view';

const view = new View();

export default class Model {

    changeImages(data) {

        switch (true) {
            case (data === constants.nextBtn):
                return view.getNextImage();
            case (data === constants.prevBtn):
                return view.getPreviousImage();
            case (data === constants.controllBtn):
                return this.checkControllBtn();
        }

    }

    checkControllBtn() {
        if (domElements.buttonIdControllBtn.classList.contains(constants.classPause)) {

            return view.playShowImage();
        }
        if (domElements.buttonIdControllBtn.classList.contains(constants.classPlay)) {
            return view.pauseShowImage();
        }
    }

}