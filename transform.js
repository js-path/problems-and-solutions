function testing(func) {
    console.log(func(367) === 736 ? "1: ok" : "1: failed")
    console.log(func(1002) === 2100 ? "2: ok" : "2: failed")
    console.log(func(250) === 250 ? "3: ok" : "3: failed")
    console.log(func(8) === 8 ? "3: ok" : "3: failed")

}

function transform(n) {
    let arr = (n + '').split('')
    if (arr[arr.length - 1] === '0') {
        return +arr.join('')
    }
    arr.unshift(arr[arr.length - 1])
    arr.pop()
    arr = +arr.join('')
    return arr
}
testing(transform)