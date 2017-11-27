exports.exch = function (a, index1, index2) {
    //console.log(a);
    console.log(index1, index2);
    //console.log('inside helper', a[index1], a[index2]);
    let holder = a[index1];
    a[index1] = a[index2];
    a[index2] = holder;

};

/*
function exports.exch(theArray, indexOne, indexTwo) {
    let holder = theArray[indexOne];
    theArray[indexOne] = theArray[indexTwo];
    theArray[indexTwo] = holder;
    return theArray;
}
*/

exports.less = function (item1, item2) {
    if (item1 < item2) {
        return true;
    } else {
        return false;
    }
};

exports.swim = function (a, index, n) {
    while (Math.floor(index/2) >= 1 && a[Math.floor(index/2)] < a[index]) {
            exports.exch(a[Math.floor(index/2)], a[index]);
            index = Math.floor(index/2);
    }
};

exports.sink = function (a, index, n) {
    while ((index * 2) <= n) {
        let biggerIndex = index * 2;
        if (exports.less(a[index * 2], a[index * 2 + 1]) && biggerIndex < n) biggerIndex++;
        if (!exports.less(a[index], a[biggerIndex])) break;
        exports.exch(a, index, biggerIndex);
        index = biggerIndex;
    }
};
