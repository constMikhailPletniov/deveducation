import { domElements } from './domElements';

let idDate = new Date().getTime();

export function addNewTask(): void {
    const text = domElements.inputIdToDoInput.value;
    if (!text) return;
    domElements.inputIdToDoInput.value = '';
    renderTask(text);
}
export function renderTask(string: string): void {
    idDate++;
    const clone = domElements.templateIdTemplateContainerToDoOut;
    const div = clone.querySelector('.containerToDoOut');
    div.id = `${idDate}`;
    div.textContent = string;
    putTaskToLocalStorage(div.id, string);
    const out = clone.cloneNode(true);
    domElements.divClassContainerToDoList.append(out);
}
export function putTaskToLocalStorage(elemId: string | null | undefined, text: string): void {
    localStorage.setItem(`${elemId}`, `${text}`);
}

export function getSaveTask(): void {
    Object.keys(localStorage).forEach(e => {
        renderTask(localStorage[e]);
        localStorage.removeItem(e);
    });
}