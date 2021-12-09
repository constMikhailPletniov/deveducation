const selectorsCss = {
    classContainerImage: '.containerImage',
    idTemplateImages: '#templateImages',
    classImageItem: '.imageItem',
    idNextBtn: '#nextBtn',
    idControllBtn: '#controllBtn',
    idPrevBtn: '#prevBtn',
    idSlides: '#slides',
};


export const domElements = {
    sectionClassContainerImage: document.querySelector(selectorsCss.classContainerImage),
    templateIdTemplateImages: document.querySelector(selectorsCss.idTemplateImages),
    imageClassImageItem: document.querySelectorAll(selectorsCss.classImageItem),
    buttonIdNextBtn: document.querySelector(selectorsCss.idNextBtn),
    buttonIdControllBtn: document.querySelector(selectorsCss.idControllBtn),
    buttonIdPrevBtn: document.querySelector(selectorsCss.idPrevBtn),
    ulIdSlides: document.querySelector(selectorsCss.idSlides),
};