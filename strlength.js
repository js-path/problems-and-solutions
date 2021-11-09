function testing(func) {
    if ((func + "").search(".length") !== -1) {
        console.log("dont use length, dogshit");
        return false
    }
    console.log(func("Hello World") === 11 ? "1: ok" : "1: failed")
    console.log(func("Edabit") === 6 ? "2: ok" : "2: failed")
    console.log(func("wash your hands!") === 16 ? "3: ok" : "3: failed")

}

function strLen(s) {
    var len = 0;
    while (s[len] !== undefined)
        len++;
    return len;
}

testing(strLen)