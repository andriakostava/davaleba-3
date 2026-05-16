// 6) ყველაზე ხშირად გამეორებადი რიცხვის პოვნა

function mostFrequent(arr) {
    let counts = {};

    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    let maxCount = 0;
    let mostCommon;

    for (let num in counts) {
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mostCommon = Number(num);
        }
    }

    return mostCommon;
}

console.log(mostFrequent([4, 5, 6, 5, 4, 5]));