var insertionSort = require('./insertionSort');

function mergeSort(theArray, lo, mid, hi) {
    let aux = [];
    let i = lo;
    let j = mid + 1;

    for (let x = 0; x < theArray.length; x++) {
        aux[x] = theArray[x];
    }

    for (let y = 0; y < theArray.length; y++) {
        if (i > mid) {
            theArray[y] = aux[j];
            j++;
        } else if (j > hi) {
            theArray[y] = aux[i];
            i++;
        } else if (aux[i] < aux[j]) {
            theArray[y] = aux[i];
            i++;
        } else {
            theArray[y] = aux[j];
            j++;
        }
    }
    return theArray;
}

let myArray = [4, 8, 9, 3, 14, 3];
let myArray2 = [1, 20, 11, 10, 5, 6];
console.log("myArray: " + myArray);
console.log("myArray2: " + myArray2);
insertionSort.insertionSort(myArray);
insertionSort.insertionSort(myArray2);
myArray = myArray.concat(myArray2);

console.log(mergeSort(myArray,0,5,11));
