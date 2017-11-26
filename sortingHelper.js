function exch(a, index1, index2) {
    let holder = a[index1];
    a[index1] = a[index2];
    a[index2] = holder;
    return a;
}

/*
function exch(theArray, indexOne, indexTwo) {
    let holder = theArray[indexOne];
    theArray[indexOne] = theArray[indexTwo];
    theArray[indexTwo] = holder;
    return theArray;
}
*/

function less(item1, item2) {
    if (item1 < item2) {
        return true;
    } else {
        return false;
    }
}

function swim(a, index, n) {
    while (Math.floor(index/2) >= 1 && a[Math.floor(index/2)] < a[index]) {
            exch(a[Math.floor(index/2)], a[index]);
            index = Math.floor(index/2);
    }
}

function sink(a, index, n) {
    while ((index * 2) <= n) {
        let biggerIndex = index * 2;
        if (less(a[index * 2], a[index * 2 + 1]) && biggerIndex < n) biggerIndex++;
        if (!less(a[index], a[biggerIndex])) break;
        exch(a, index, biggerIndex);
        index = biggerIndex;
    }
}

module.exports = less;
module.exports = exch;
module.exports = swim;
module.exports = sink;
