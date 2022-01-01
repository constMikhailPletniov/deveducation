let draggged: EventTarget;

export function startDrag(e: Event): void {
    draggged = e.target;
    console.log(draggged);
}

export function allowDrop(e: Event): void {
    e.preventDefault();
}

export function dropElement(e: Event): void {
    e.preventDefault();

    switch (true) {
        case ((<HTMLDivElement>e.target).className === 'containerToDoList'):
            console.log(e.target);
            break;
        case ((<HTMLDivElement>e.target).className === 'containerInProgress'):
            (<HTMLDivElement>draggged).parentElement?.removeChild(draggged);
            e.target.append(draggged);
            break;
    }

}
// export function drag(e: Event) {
//     const item = e.target as HTMLElement
//     (<DragEvent><unknown>item).dataTransfer?.setData('id', item.id);
// }

// export function drop(e: Event) {
//     e.preventDefault();
//     const itemId = (<DragEvent><unknown>e.target)?.dataTransfer.getData('id');
//     console.log(itemId);
//     (<HTMLElement>e.target).append(<HTMLElement>document.getElementById(itemId));
// }