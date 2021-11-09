function testing(func) {
    console.log(JSON.stringify(func(["fanta", "cola", "water"])) === '["water"]' ? "1: ok" : "1: failed")
    console.log(JSON.stringify(func(["fanta", "cola"])) === '[]' ? "2: ok" : "2: failed")
    console.log(JSON.stringify(func(["lemonade", "beer", "water"])) === '["lemonade","beer","water"]' ? "3: ok" : "3: failed")

}

function skipTooMuchSugarDrinks(arr) {
    return arr.filter(function(val) {
        return val !== "cola" && val !== "fanta"
    })
}

testing(skipTooMuchSugarDrinks)
    //console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));