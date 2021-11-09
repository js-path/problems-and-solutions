function testing(func) {
    console.log(func("apple") === false ? "1: ok" : "1: failed")
    console.log(func("abba") === true ? "2: ok" : "2: failed")
    console.log(func("") === true ? "3: ok" : "3: failed")

}

function isEven(str) {
    if (str.length % 2 === 0) {
        return true
    } else {
        return false
    }
}
testing(isEven)