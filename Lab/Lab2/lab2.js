// Function to get input from command line arguments and validate it
function getValidatedInput(input, message) {
    let number = parseFloat(input);
    if (!isNaN(number) && number > 0) {
        return number;
    } else {
        console.log(`Invalid value for ${message}. Please provide a positive number.`);
        process.exit(1);
    }
}

// Function to calculate BMI
function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(1);
}

// Function to evaluate BMI and give feedback
function evaluateBMI(bmi) {
    const underweight = 18.5;
    const normalWeight = 24.9;
    const overweight = 29.9;

    console.log(`[INFO] Your BMI is ${bmi}`);
    if (bmi < underweight) {
        console.log("You're underweight. You should increase your weight!");
    } else if (bmi <= normalWeight) {
        console.log("You have a normal weight. Keep up the good work!");
    } else if (bmi <= overweight) {
        console.log("You're overweight. You should decrease your weight!");
    } else {
        console.log("You have obesity. You should decrease your weight!");
    }
}

// Main program
if (process.argv.length !== 4) {
    console.log('Usage: node bmi_calculator.js <height> <weight>');
    process.exit(1);
}

const height = getValidatedInput(process.argv[2], 'height (m)');
const weight = getValidatedInput(process.argv[3], 'weight (kg)');

const bmi = calculateBMI(weight, height);
evaluateBMI(bmi);
