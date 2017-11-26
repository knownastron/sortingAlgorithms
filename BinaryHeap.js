const sink = require('./sortingHelper');
const swim = require('./sortingHelper');
const less = require('./sortingHelper');
const exch = require('./sortingHelper');

class BinaryHeap {
    constructor() {
        this._a = [0];
        this._N = 0;
    }

    get a() {
        return this._a;
    }

    get N() {
        return this._N;
    }

    add(item) {
        this._a[++this._N] = item;
        swim(this._a, this._N);
    }

    removeMax() {
        let max = this.a[1];
        exch(this._a, 1, this._N);
        this._a.pop(this._N--);
        sink(this._a, 1, this._N);
        return max;
    }

    printIndex(index) {
        console.log(this._a[index]);
    }

    print() {
        console.log(this._a.toString());
    }
}

let myArray = ['b', 'd', 'a', 'c', 'p'];

let myHeap = new BinaryHeap();

myHeap.add('d');
myHeap.add('p');
myHeap.add('c');
myHeap.add('z');
myHeap.add('l');
myHeap.add('e');
myHeap.add('w');
myHeap.add('l');
myHeap.print();
myHeap.removeMax();
myHeap.print();
myHeap.removeMax();
myHeap.print();
myHeap.removeMax();
myHeap.print();
myHeap.removeMax();
myHeap.print();
myHeap.removeMax();
myHeap.print();
