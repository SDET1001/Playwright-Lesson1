// Function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example arrays
let array1 = [1, 12, 16, 28, 34];
let array2 = [1, 13, 16, 27, 99];

// Call the function with the example arrays and log the result
let mergedArray = mergeSortedArrays(array1, array2);
console.log(`Merged and sorted array: ${mergedArray}`);
