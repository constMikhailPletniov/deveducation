import { domElements } from '../../config/domElements';
import { constants } from '../../config/constants';

const slides = domElements.ulIdSlides.children;

let time = null;

export default class View {
    constructor() {
        this.delay = 5000;
    }

    getNextImage() {
        for (const item of slides) {
            if (item.classList.contains(constants.showImage)) {
                item.classList.remove(constants.showImage);
                if (item.nextElementSibling === null) {
                    return slides[0].classList.add(constants.showImage);
                }
                return item.nextElementSibling.classList.add(constants.showImage);
            }
        }
    }

    getPreviousImage() {
        for (const item of slides) {
            if (item.classList.contains(constants.showImage)) {
                item.classList.remove(constants.showImage);
                if (item.previousElementSibling === null) {
                    return slides[4].classList.add(constants.showImage);
                }
                return item.previousElementSibling.classList.add(constants.showImage);
            }
        }
    }

    playShowImage() {
        domElements.buttonIdControllBtn.classList.remove(constants.classPause);
        domElements.buttonIdControllBtn.classList.add(constants.classPlay);
        clearTimeout(time);
        this.showImageByInterval();
    }

    showImageByInterval() {
        this.getNextImage();
        time = setTimeout(this.showImageByInterval.bind(this), this.delay);
    }

    pauseShowImage() {
        domElements.buttonIdControllBtn.classList.remove(constants.classPlay);
        domElements.buttonIdControllBtn.classList.add(constants.classPause);
        clearTimeout(time);
    }

}