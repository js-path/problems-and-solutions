function testing(func) {
    console.log(func([2, 7, 4]) === 13 ? "1: ok" : "1: failed")
    console.log(func([45, 3, 0]) === 48 ? "2: ok" : "2: failed")
    console.log(func([-2, 84, 23]) === 105 ? "3: ok" : "3: failed")

}

function sum(arr) {
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue);
}
testing(sum)