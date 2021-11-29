
const selectorsCss = {
    idFormToDo: '#formToDo',
    idInputSubmit: '#inputSubmit',
    idTextAreaText: '#textAreaText',
    classOut: '.out',
    classListPlans: '.listPlans',
    classBtnDelete: 'btnDelete',
    classPlansItem: 'plansItem'
}
const elementsOfDom = {
    formIdFormToDo: document.querySelector(selectorsCss.idFormToDo),
    inputIdInputSubmit: document.querySelector(selectorsCss.idInputSubmit),
    textAreaIdTextAreaText: document.querySelector(selectorsCss.idTextAreaText),
    divClassOut: document.querySelector(selectorsCss.classOut),
    ulClassLisstPlans: document.querySelector(selectorsCss.classListPlans),
    allButtonClassBtnDelete: document.getElementsByClassName(selectorsCss.classBtnDelete),
    allDivPlansItem: document.getElementsByClassName(selectorsCss.classPlansItem)
};


export default elementsOfDom;
