const readline = require('readline');
const { tokenizer } = require('./tokenizer');
const { isValidInput } = require('./validator');
const { infixToPostfix } = require('./parser');
const { mathExpression } = require('./evaluator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter expression: ", (input) => {
    try {
        if (!input.trim()) {
            throw new Error("input cannot be empty");
        }

        if (!isValidInput(input)) {
            throw new Error("invalid characters in input");
        }

        let tokenized = tokenizer(input);

        if (!tokenized) {
            throw new Error("Invalid input");
        }

        const midRes = infixToPostfix(tokenized);
        const result = mathExpression(midRes);

        console.log(`The result: ${result}`);
    } catch (err) {
        console.error("Error", err.message);
    } finally {
        rl.close();
    }
});
