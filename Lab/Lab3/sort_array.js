let intArr = [12, 34, 1, 16, 28];

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

let sortedArr = sortArray(intArr);
console.log(`Sorted array: ${sortedArr}`);
