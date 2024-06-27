const readline = require('readline-sync');

// Function to check if a number is valid
function isNumber(value) {
    return !isNaN(value) && Number.isInteger(parseFloat(value));
}

// Function to check if a number is odd or even
function checkOddOrEven(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// Main program
let numberInput = readline.question('Please input a number: ').trim();

if (isNumber(numberInput)) {
    let number = parseInt(numberInput);
    let result = checkOddOrEven(number);
    console.log(`The number ${number} is ${result}.`);
} else {
    console.log('Invalid input. Please input a valid integer number.');
}
