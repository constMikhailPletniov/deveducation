/*1. Создать реализацию Linked List на JS используя функциональный подход.
Необходимый функционал:*/

function LinkedList() {
    this.head = null;
    this.size = 0;

    this.length = () => {
        return this.size;
    };

    this.Head = () => {
        return this.head;
    };

    this.add = (item) => {
        this.head = new Node(item, this.head);
        this.size++;
        return;
    };
    this.remove = () => {
        if (!this.head) return;
        this.head = this.head.next;
        this.size--;
        return;
    };
}

function Node(value, next = null) {
    this.value = value;
    this.next = next;
}

const link = new LinkedList;

function checkInput() {

    if (this.textContent === 'Add') {
        link.add(elementsDom.inputValues.value);
        printList(link);
    }
    if (this.textContent === 'Remove') {
        removePrintList(link);
        link.remove();
    }
}

function printList(item) {

    const head = item.Head();
    const article = document.createElement('article');
    elementsDom.sectionOutList.prepend(article);

    for (const key of Object.values(head)) {
        const div = document.createElement('div');
        div.className = 'linked-items';
        if (typeof key === 'object' && key !== null) {
            for (const item of Object.values(key)) {
                const div = document.createElement('div');

                div.className = 'linked-items';
                article.append(div);
                div.append(item);
                return;
            }

        }

        article.append(div);

        div.append(key);

    }
}

function removePrintList() {

    for (let i = 0; i <= document.getElementsByClassName('linked-items').length; i++) {

        if (i === document.getElementsByClassName('linked-items').length - 1) {

            document.getElementsByClassName('linked-items')[i].remove();
            document.getElementsByClassName('linked-items')[i - 1].remove();
            if (document.getElementsByClassName('linked-items')[i - 2] === undefined) return;

            document.getElementsByClassName('linked-items')[i - 2].textContent = 'null';
        }
    }
    for (let i = 0; i <= document.getElementsByTagName('article').length; i++) {
        if (i === document.getElementsByTagName('article').length - 1) {
            document.getElementsByTagName('article')[i].remove();
        }
    }
    return;
}

elementsDom.buttonAdd.addEventListener('click', checkInput);
elementsDom.buttonRemove.addEventListener('click', checkInput);
