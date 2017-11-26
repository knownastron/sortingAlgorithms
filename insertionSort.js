function exch(theArray, indexOne, indexTwo) {
    let holder = theArray[indexOne];
    theArray[indexOne] = theArray[indexTwo];
    theArray[indexTwo] = holder;
    return theArray;
}

function insertionSort(theArray) {
    for (let i = 1; i < theArray.length; i ++) {
        for (let j = i; j !== 0 && theArray[j] < theArray[j-1]; j--) {
            exch(theArray, j, j-1);
        }
    }
    return theArray;
}

let myArray = [];
for (let i = 0; i < 10; i++) {
    myArray.push(Math.floor(Math.random() * 10));
}



//console.log(myArray);
//console.log(insertionSort(myArray));

module.exports.insertionSort = insertionSort;
