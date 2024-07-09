// Function to count odd and even numbers in an array
function countOddEvenNumbers(arr) {
    let evenCount = 0;
    let oddCount = 0;

    arr.forEach(number => {
        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    });

    console.log(`Even numbers: ${evenCount}`);
    console.log(`Odd numbers: ${oddCount}`);
}

// Example array
let intArr = [1, 2, 3, 4, 5];

// Call the function with the example array
countOddEvenNumbers(intArr);
