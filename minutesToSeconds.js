function testing(func) {
    console.log(func(2) === 120 ? "1: ok" : "1: failed")
    console.log(func(5) === 300 ? "2: ok" : "2: failed")
    console.log(func(0) === 0 ? "3: ok" : "3: failed")
}

function minuteToSecond(minute) {
    return minute * 60
}
testing(minuteToSecond)