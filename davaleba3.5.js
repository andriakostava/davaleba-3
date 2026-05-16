function palindromes(words) {
    let result = [];

    for (let word of words) {
        if (word === word.split("").reverse().join("")) {
            result.push(word);
        }
    }

    return result;
}

console.log(palindromes(["mom", "car", "level", "dog"]));