function testing(func) {
    if ((func + "").search(".reverse") !== -1) {
        console.log("dont use reverse function, dogshit");
        return false
    }
    console.log(JSON.stringify(func([1, 2, 3, 4])) === "[4,3,2,1]" ? "1: ok" : "1: failed")
    console.log(JSON.stringify(func([9, 9, 2, 3, 4])) === "[4,3,2,9,9]" ? "2: ok" : "2: failed")
    console.log(JSON.stringify(func([])) === '[]' ? "3: ok" : "3: failed")

}

function revers(arr) {
    var output = [];
    while (arr.length) {
        output.push(arr.pop());
    }

    return output;
}


testing(revers)