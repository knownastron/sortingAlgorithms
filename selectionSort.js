function exch(theArray, indexOne, indexTwo) {
    let holder = theArray[indexOne];
    theArray[indexOne] = theArray[indexTwo];
    theArray[indexTwo] = holder;
    return theArray;
}

function selectionSort(theArray) {
    for (var index = 0; index < theArray.length; index++) {
        var loIndex = index;
        for (var i = index + 1; i < theArray.length; i++) {
                if (theArray[i] < theArray[loIndex]){
                loIndex = i;
            }
        }
        exch(theArray, index, loIndex);
    }
    return theArray;

}


let myArray = [];
for (let i = 0; i < 10; i++) {
    myArray.push(Math.floor(Math.random() * 10));
}

console.log(myArray);
console.log(selectionSort(myArray));
