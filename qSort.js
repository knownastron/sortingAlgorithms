function exch(a, indexOne, indexTwo) {
    let holder = a[indexOne];
    a[indexOne] = a[indexTwo];
    a[indexTwo] = holder;
    return a;
}

function qSort(a) {
    sort(a, 0, a.length - 1);
}

function sort(a, lo, hi) {
    if (lo >= hi) return;
    let j = partition(a, lo, hi);
    sort(a,lo, j-1);
    sort(a, j+1, hi);
}

function partition(a, lo, hi) {
    let i = lo;
    let j = hi+1;
    let v = a[lo];

    while (true) {
        while (v > a[++i]) {
            if (i === hi) break;
        }
        while (a[--j] > v) {
            if (j === lo) break;
        }
        if (i >= j) break;
        exch(a, i, j);
    }
    exch(a, lo, j);
    return j;
}



let myArray = [];
for (let i = 0; i < 50; i++) {
    myArray.push(Math.floor(Math.random() * 10));
}



console.log(myArray);
qSort(myArray);
console.log(myArray.toString());
