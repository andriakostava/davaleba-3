function reverseDigits(num) {
    return String(num)
        .split("")
        .reverse()
        .map(Number);
}

console.log(reverseDigits(35231)); 
console.log(reverseDigits(0)); 