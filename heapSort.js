const helper = require('./sortingHelper.js');

/*
function exch(a, index1, index2) {
    let holder = a[index1];
    a[index1] = a[index2];
    a[index2] = holder;
}


function less(itemOne, itemTwo) {
    if (itemOne < itemTwo) {
        return true;
    } else {
        return false;
    }
}
*/

function heapSort(inputArray) {
    let n = inputArray.length;
    let newArray = [0];
    newArray = newArray.concat(inputArray);
    for (let i = Math.floor(n/2); i >= 1; i--) {
        helper.sink(newArray, i, n);
    }
    while (n > 1) {
        helper.exch(newArray, 1, n);
        n--;
        helper.sink(newArray, 1, n);
    }
     return (newArray.splice(1, newArray.length).toString());
}

let myString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//let myString = 'CDBYXAIJKVWNOPEFGQRSZLMHTU';
let myArray = [];
for (let i = 0; i < myString.length; i++) {
    myArray.push(myString[i]);
}
console.log(myArray.toString());
helper.exch(myArray, 1, 10);
console.log(myArray.toString());
