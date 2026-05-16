function arrayDiff(a, b) {
    let result = [];

    for (let num of a) {
        if (!b.includes(num) && !result.includes(num)) {
            result.push(num);
        }
    }

    return result;
}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));