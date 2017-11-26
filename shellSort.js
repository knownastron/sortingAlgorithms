

function exch(theArray, indexOne, indexTwo) {
    let holder = theArray[indexOne];
    theArray[indexOne] = theArray[indexTwo];
    theArray[indexTwo] = holder;
    return theArray;
}

function shellSort(theArray) {
    let h = 1;
    let n = theArray.length;
    while (h < n/3) h = 3 * h + 1;
    while (h >= 1) {
    //console.log(`the h is ${h}`);
        for (let i = 0; i < n; i++) {
    //        console.log(`the i is ${i}`);
    //        console.log(`comparing ${theArray[i]} with ${theArray[i-h]}`);
            for (let j = i; j > 0  && (theArray[j] < theArray[j-h]); j -= h) {
    //            console.log(`exchanging ${theArray[j]} with ${theArray[j-h]}`);
                exch(theArray, j, j-h);
            }
        }
    h = Math.floor(h/3);
    }
    return theArray;
}

let myArray = [];

for (let i = 0; i < 10000000; i++) {
    myArray.push(Math.floor(Math.random() * 10));
}


console.log(myArray.toString());
console.log(shellSort(myArray).toString());
