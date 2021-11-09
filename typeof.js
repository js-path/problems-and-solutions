function testing(func) {
    console.log(JSON.stringify(func([1, 2, "null", []])) === JSON.stringify(["number", "number", "string", "object"]) ? "1: ok" : "1: failed")
    console.log(JSON.stringify(func(["214", true, false, 2, 2.15, [], null])) === JSON.stringify(["string", "boolean", "boolean", "number", "number", "object", "object"]) ? "2: ok" : "2: failed")
    console.log(JSON.stringify(func([21.1, "float", "array", ["I am array"], null, true, 214])) === JSON.stringify(['number', "string", "string", "object", "object", "boolean", "number"]) ? "3: ok" : "3: failed")
}

function arrayValuesTypes(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(typeof arr[i]);
    }
    console.log(newArray);
    return newArray;
}

testing(arrayValuesTypes)