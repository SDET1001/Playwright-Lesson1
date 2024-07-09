// Function to find the minimum and maximum values in an array
function findMinMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    console.log(`Minimum: ${min}`);
    console.log(`Maximum: ${max}`);
}

// Example array
let intArr = [1, 2, 3, 4, 5];

// Call the function with the example array
findMinMax(intArr);
