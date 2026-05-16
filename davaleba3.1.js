function average(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum / arr.length;
}

console.log(average([1, 2, 3, 4]));