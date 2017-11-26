class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLL {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    add(item) {
        let node = new Node(item);
        let currentNode = this.head;

        if (!currentNode) {
            this.head = node;
            this.length++;
            return node;
        }

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        this.length++;

        return node;
    }

    searchNodeAt(position) {
        let currentNode = this.head;
        let count = 1;
        let message = { failure: 'Error, invalid position'};

        if(position < 1 || position > this.length) {
            throw new Error(message.failure);
        }

        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    remove(position) {
        let currentNode = this.head;
        let nextNode = this.head.next;
        let count = 1;
        let deletedNode = null;
        let beforeDeletedNode = null;
        let toBeDeletedNode = null;

        let message = {failure: 'Error, invalid position'};

        if (position > this.length || position < 1) {
            throw new Error(message.failure);
        }

        if (position === 1) {
            this.head = currentNode.next;
            deletedNode = currentNode;
            currentNode = null;
            this.length--;
            return deletedNode;
        }

        while (count < position) {
            beforeDeletedNode = currentNode;
            toBeDeletedNode = currentNode.next;
            currentNode = nextNode;
            nextNode = nextNode.next;
            count++;
        }

        beforeDeletedNode.next = toBeDeletedNode.next;
        deletedNode = toBeDeletedNode;
        toBeDeletedNode = null;
        this.length--;
        return deletedNode;

    }

    print() {
        let output = '';
        let count = 1;
        let currentNode = this.head;

        while (count <= this.length) {
            output = output + currentNode.data + ' ';
            currentNode = currentNode.next;
            count++;
        }
        console.log(output);
    }
}

let myll = new SinglyLL();
myll.add(5);
myll.add(6);
myll.add(7);
console.log(myll.remove(2));
console.log(myll.remove(2));
myll.print();
