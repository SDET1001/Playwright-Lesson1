const readline = require('readline');

// Function to count word occurrences
function countWords(sentence) {
    // Convert the sentence to lowercase and split into words
    const words = sentence.toLowerCase().match(/\w+/g);
    
    // Object to store word counts
    const wordCounts = {};
    
    // Count occurrences of each word
    words.forEach(word => {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });

    // Print word counts
    for (const word in wordCounts) {
        console.log(`${word}: ${wordCounts[word]}`);
    }
}

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for input
rl.question('Please enter a sentence: ', (sentence) => {
    countWords(sentence); // Count words in user input
    rl.close(); // Close the interface
});
