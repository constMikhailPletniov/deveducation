export const selectorsCss = {
    classContainerToDoList: 'containerToDoList',
    classContainerInProgress: 'containerInProgress',
    classContainerDone: 'containerDone',
    idAddToDoBtn: 'addToDoBtn',
    classContainerToDoOut: 'containerToDoOut',
    idTemplateContainerToDoOut: 'templateContainerToDoOut',
    idToDoInput: 'toDoInput',
    idTemplateContainerInProgress: 'templateContainerInProgress',
    classContainerInProgressOut: 'containerInProgressOut',
    idTemplateContainerDone: 'templateContainerDone',
    classContainerDoneOut: 'containerDoneOut'
};

export const domElements = {
    divClassContainerInProgress: <HTMLDivElement>document.querySelector(`.${selectorsCss.classContainerInProgress}`),
    divClassContainerDone: <HTMLDivElement>document.querySelector(`.${selectorsCss.classContainerDone}`),
    divClassContainerToDoList: <HTMLDivElement>document.querySelector(`.${selectorsCss.classContainerToDoList}`),
    buttonIdAdToDoBtn: <HTMLButtonElement>document.querySelector(`#${selectorsCss.idAddToDoBtn}`),
    divClassContainerToDoOut: <HTMLDivElement>document.querySelector(`.${selectorsCss.classContainerToDoOut}`),
    templateIdTemplateContainerToDoOut: (<HTMLTemplateElement>document.querySelector(`#${selectorsCss.idTemplateContainerToDoOut}`)).content,
    inputIdToDoInput: <HTMLInputElement>document.querySelector(`#${selectorsCss.idToDoInput}`),
    templateIdTemplateContainerInProgress: (<HTMLTemplateElement>document.querySelector(`#${selectorsCss.idTemplateContainerInProgress}`)).content,
    divClassContainerInProgressOut: <HTMLDivElement>document.querySelector(`.${selectorsCss.classContainerInProgressOut}`),
    templateIdTemplateContainerDone: (<HTMLTemplateElement>document.querySelector(`#${selectorsCss.idTemplateContainerDone}`)).content,
    divClassContainerDoneOut: <HTMLDivElement>document.querySelector(`.${selectorsCss.classContainerDoneOut}`)
};