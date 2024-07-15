// Function to find the minimum and maximum values in an array
function findMinMax(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        console.log('Array is empty');
        return;
    }

    // Initialize the minimum and maximum values
    let min = arr[0];
    let max = arr[0];

    // Iterate through each element in the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log(`Minimum: ${min}`);
    console.log(`Maximum: ${max}`);
}

// Example array
let intArr = [1, 2, 3, 4, 5];

// Call the function with the example array
findMinMax(intArr);
