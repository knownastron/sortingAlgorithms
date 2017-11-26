class Stack {
    constructor(){
        this.n = 0;
        this.storage = [];
    }

    push(item) {
        this.n++;
        this.storage[this.n] = item;
    }

    pop() {
        this.storage[this.n] = null;
        this.n--;
    }

    isEmpty() {
        if (this.n === 0) {
            return true;
        } else {
            return false;
        }
    }

    peek() {
        return this.storage[this.n];
    }
}

const myStack = new Stack();

let myArray = [4, 5, 6, 10];
console.log(myArray);
for (let ele in myArray) {
    myStack.push(ele);
}

console.log(myStack.peek());
console.log(myStack);
