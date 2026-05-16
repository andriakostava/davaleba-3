function secondLargest(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => a - b);

    return unique[unique.length - 2];
}

console.log(secondLargest([10, 40, 20, 5, 30]));