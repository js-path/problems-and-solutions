function testing(func) {
    console.log(func([1, 5, 3], 5) === 1 ? "1: ok" : "1: failed")
    console.log(func([9, 8, 3], 3) === 2 ? "2: ok" : "2: failed")
}

function indeks(arr, x) {
    return arr.indexOf(x)
}

testing(indeks)