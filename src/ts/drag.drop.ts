import { IElementDraggged } from './interface';
import { selectorsCss } from './domElements';
import { putTaskToLocalStorage } from './tasks';

let draggged: EventTarget;

export function startDrag(e: Event): void {
    draggged = <EventTarget>e.target;
}

export function allowDrop(e: Event): void {
    e.preventDefault();
}

export function dropElement(e: Event): void {
    e.preventDefault();

    switch (true) {
        case ((<HTMLDivElement>e.target).className === selectorsCss.classContainerToDoList):
            const idElem = (<HTMLElement>draggged).id.split('-').slice(-1).toString();
            localStorage.removeItem((<HTMLElement>draggged).id);
            (<HTMLElement>draggged).id = `${selectorsCss.classContainerToDoList}-${idElem}`;
            putTaskToLocalStorage((<HTMLElement>draggged).id, (<IElementDraggged><unknown>draggged).textContent);
            (<HTMLElement>e.target).append(<HTMLElement>draggged);
            break;
        case ((<HTMLDivElement>e.target).className === selectorsCss.classContainerInProgress):
            (<HTMLDivElement>draggged).parentElement?.removeChild(<HTMLElement>draggged);
            const idElemProgress = (<HTMLElement>draggged).id.split('-').slice(-1).toString();
            localStorage.removeItem((<HTMLElement>draggged).id);
            (<HTMLElement>draggged).id = `${selectorsCss.classContainerInProgress}-${idElemProgress}`;
            putTaskToLocalStorage((<HTMLElement>draggged).id, (<IElementDraggged><unknown>draggged).textContent);
            (<HTMLElement>e.target).append(<HTMLElement>draggged);
            break;
        case ((<HTMLDivElement>e.target).className === selectorsCss.classContainerDone):
            (<HTMLDivElement>draggged).parentElement?.removeChild(<HTMLElement>draggged);
            const idElemDone = (<HTMLElement>draggged).id.split('-').slice(-1).toString();
            localStorage.removeItem((<HTMLElement>draggged).id);
            (<HTMLElement>draggged).id = `${selectorsCss.classContainerDone}-${idElemDone}`;
            putTaskToLocalStorage((<HTMLElement>draggged).id, (<IElementDraggged><unknown>draggged).textContent);
            (<HTMLElement>e.target).append(<HTMLElement>draggged);
            break;
    }

}
