const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to create a bank account object
function createBankAccount(accountNumber, routingNumber, balance) {
    return {
        accountNumber,
        routingNumber,
        balance
    };
}

// Function to clone a bank account object and update the account number
function cloneAndUpdateAccount(originalAccount, newAccountNumber) {
    return {
        ...originalAccount,
        accountNumber: newAccountNumber
    };
}

// Initialize the bank accounts array
const originalAccount = createBankAccount('123456789', '987654321', 1000);
const clonedAccount = cloneAndUpdateAccount(originalAccount, '987654321');
const bankAccounts = [originalAccount, clonedAccount];

// Function to find an account by account number
function findAccount(accountNumber) {
    return bankAccounts.find(account => account.accountNumber === accountNumber);
}

// Function to withdraw money from an account
function withdrawMoney(account, amount) {
    if (amount > account.balance) {
        console.log('Error: Insufficient funds.');
    } else {
        account.balance -= amount;
        console.log(`Withdrawal successful. New balance: $${account.balance}`);
    }
}

// Function to process user commands
function processCommand(command) {
    switch (command) {
        case '1':
            rl.question('Enter account number: ', accountNumber => {
                const account = findAccount(accountNumber);
                if (account) {
                    console.log(`Account Number: ${account.accountNumber}, Balance: $${account.balance}`);
                } else {
                    console.log('Account not found.');
                }
                showMenu();
            });
            break;
        case '2':
            rl.question('Enter account number: ', accountNumber => {
                const account = findAccount(accountNumber);
                if (account) {
                    rl.question('Enter amount to withdraw: $', amount => {
                        amount = parseFloat(amount); // Convert the amount to a number
                        if (isNaN(amount) || amount <= 0) {
                            console.log('Invalid amount. Please enter a valid number.');
                        } else {
                            withdrawMoney(account, amount);
                        }
                        showMenu();
                    });
                } else {
                    console.log('Account not found.');
                    showMenu();
                }
            });
            break;
        case '0':
            console.log('Exiting the program.');
            rl.close();
            break;
        default:
            console.log('Invalid option. Please try again.');
            showMenu();
            break;
    }
}

// Function to display the menu
function showMenu() {
    console.log('=== Banking Application ===');
    console.log('1. Find an account');
    console.log('2. Withdraw money');
    console.log('0. Exit the program');
    rl.question('Choose an option: ', processCommand);
}

// Start the application by showing the menu
showMenu();
