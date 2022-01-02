import { domElements, selectorsCss } from './domElements';

let idDate = new Date().getTime();

export function addNewTask(): void {
    const text = domElements.inputIdToDoInput.value;
    if (!text) return;
    domElements.inputIdToDoInput.value = '';
    renderTask(text, selectorsCss.classContainerToDoList);
}
export function renderTask(string: string, key: string): void {

    switch (true) {
        case (key.startsWith(selectorsCss.classContainerToDoList) || key.startsWith(selectorsCss.classContainerToDoOut)):
            idDate++;
            const clone = domElements.templateIdTemplateContainerToDoOut;
            const div = clone.querySelector(`.${selectorsCss.classContainerToDoOut}`);
            (<HTMLElement>div).id = `${selectorsCss.classContainerToDoOut}-${idDate}`;
            (<HTMLElement>div).textContent = string;
            putTaskToLocalStorage((<HTMLElement>div).id, string);
            const out = clone.cloneNode(true);
            domElements.divClassContainerToDoList.append(out);
            break;
        case key.startsWith(selectorsCss.classContainerInProgress):
            idDate++;
            const cloneProgress = domElements.templateIdTemplateContainerInProgress;
            const divProgress = cloneProgress.querySelector(`.${selectorsCss.classContainerInProgressOut}`);
            (<HTMLElement>divProgress).id = `${selectorsCss.classContainerInProgressOut}-${idDate}`;
            (<HTMLElement>divProgress).textContent = string;
            putTaskToLocalStorage((<HTMLElement>divProgress).id, string);
            const outProgress = cloneProgress.cloneNode(true);
            domElements.divClassContainerInProgress.append(outProgress);
            break;
        case (key.startsWith(selectorsCss.classContainerDone)):
            idDate++;
            const cloneDone = domElements.templateIdTemplateContainerDone;
            const divDone = cloneDone.querySelector(`.${selectorsCss.classContainerDoneOut}`);
            (<HTMLElement>divDone).id = `${selectorsCss.classContainerDoneOut}-${idDate}`;
            (<HTMLElement>divDone).textContent = string;
            putTaskToLocalStorage((<HTMLElement>divDone).id, string);
            const outDone = cloneDone.cloneNode(true);
            domElements.divClassContainerDone.append(outDone);
            break;
    }
}
export function putTaskToLocalStorage(elemId: string | null | undefined, text: string): void {
    localStorage.setItem(`${elemId}`, `${text}`);
}

export function getSaveTask(): void {
    Object.keys(localStorage).forEach(e => {
        renderTask(localStorage[e], e);
        localStorage.removeItem(e);
    });
}

export function removeTask(e: Event): void {
    if ((<HTMLElement>e.target).id.startsWith(selectorsCss.classContainerToDoList) || (<HTMLElement>e.target).id.startsWith(selectorsCss.classContainerToDoOut)
        || (<HTMLElement>e.target).id.startsWith(selectorsCss.classContainerInProgress) || (<HTMLElement>e.target).id.startsWith(selectorsCss.classContainerDone)) {
        localStorage.removeItem((<HTMLElement>e.target).id);
        (<HTMLElement>(<HTMLElement>e.target).parentElement).removeChild(<HTMLElement>e.target);
    }
}