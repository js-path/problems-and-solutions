function testing(func) {
    console.log(func(111) === false ? "1: ok" : "1: failed")
    console.log(func(224) === true ? "2: ok" : "2: failed")
    console.log(func(223) === false ? "3: ok" : "3: failed")
    console.log(func(280) === true ? "3: ok" : "3: failed")
}

function checkIfEven(num) {
    acc = 0;
    h = num.toString();
    arr = h.split('');

    arr.forEach(element => {
        if (element % 2 === 0) {
            acc++
        }
    });

    if (acc == 3) {
        return true
    } else {
        return false
    }
}
testing(checkIfEven)