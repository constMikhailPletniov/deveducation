export const selectorsCss = {
    IdTemplateImageList: '#template-image-list',
    tagLi: 'li',
    idBtnPrevious: '#btn-previous',
    idBtnNext: '#btn-next',
    classImageItem: 'image-item',
    classBigImageContainer: '.big-image-container',
    classContainerImages: '.container-images',
    classPagination: '.pagination',
    tagUl: 'ul',
    IdTemplateImageContainer: '#template-image-container',
    idTemplateBigImage: '#template-big-image'
};

export const elementsDom = {
    templateIdTemplateImageList: (document.querySelector(selectorsCss.IdTemplateImageList) as HTMLMetaElement).content,
    templateIdTemplateImageContainer: (<HTMLMetaElement>document.querySelector(selectorsCss.IdTemplateImageContainer)).content,
    templateIdTemplateBigImage: (<HTMLMetaElement>document.querySelector(selectorsCss.idTemplateBigImage)).content,
    PREVIOUS_BUTTON: (<HTMLElement>document.querySelector(selectorsCss.idBtnPrevious)),
    NEXT_BUTTON: (<HTMLElement>document.querySelector(selectorsCss.idBtnNext)),
    IMG: document.getElementsByClassName(selectorsCss.classImageItem),
    BIG_IMAGE_DIV: document.querySelector(selectorsCss.classBigImageContainer),
    divContainerImg: (<HTMLElement>document.querySelector(selectorsCss.classContainerImages)),
    DIV_PAGINATION: <HTMLElement>document.querySelector(selectorsCss.classPagination),
    UL_TAG: <HTMLElement>document.querySelector(selectorsCss.tagUl),
    LI_TAG: document.getElementsByTagName(selectorsCss.tagLi),
};

export const initial = {
    DOG_API: 'https://dog.ceo/api/breed/hound/images',
    JSON_PLACEHOLDER_API: 'https://jsonplaceholder.typicode.com/photos?_limit=50',
    apiArray: [],
    itemsOnPage: 16,
};