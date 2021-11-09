function testing(func) {
    console.log(func(30, 80) === false ? "1: ok" : "1: failed")
    console.log(func(60, 40) === true ? "2: ok" : "2: failed")
    console.log(func(10, 39) === true ? "3: ok" : "3: failed")
}

function comparing(n1, n2) {
    if (n1 + n2 <= 100) {
        return true
    } else {
        return false
    }
}

testing(comparing)