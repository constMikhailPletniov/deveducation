/*1. Создать реализацию Linked List на JS используя функциональный подход.
Необходимый функционал:*/

function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList(size = 0, head = null) {

    this.size = () => {
        return size;
    };

    this.head = () => {
        return head;
    };

    this.add = (element) => {
        let node;
        let currentNode;
        if (Array.isArray(element)) {
            for (const item of element) {
                node = new Node(item);
                if (head === null) {
                    head = node;
                } else {
                    currentNode = head;

                    while (currentNode.next) {
                        return currentNode = currentNode.next;
                    }
                    size++;
                    return currentNode.next = node;
                }
            }
        } else {
            node = new Node(element);
        }
        if (head === null) {
            head = node;
        } else {
            currentNode = head;

            while (currentNode.next) {
                return currentNode = currentNode.next;
            }
            size++;
            currentNode.next = node;
        }


        return head;
    };

    this.remove = (element) => {
        let currentNode = head;
        let prevNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        }
        while (currentNode.element !== element) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        prevNode.next = currentNode.next;

        size--;
        return head;
    };

}

const link = new LinkedList();

link.add(['f', 'c', 'd'])
link.add(2)

printList(link);

function printList(item) {

    if (item.size() === 0) return;
    const size = item.size();
    const head = item.head();

    for (const key of Object.values(head)) {

        const div = document.createElement('div');


    }
}