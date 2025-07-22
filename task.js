const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tokenizer(input) {
    const regex = /\d+\.?\d*|\+|-|\*|\/|\(|\)/g;
    const tokens = input.match(regex);

    return tokens;
}

function foo(tokenized) {
    let result = [];
    let stack = [];

    for (let token of tokenized) {
        if (!isNaN(token)) {
            result.push(token);
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                result.push(stack.pop());
            }
            stack.pop();
        } else {
            while (stack.length && isOp(stack[stack.length - 1]) && getValue(stack[stack.length - 1]) >= getValue(token)) {
                result.push(stack.pop());
            }
        }
    }

    while (stack.length) {
        result.push(stack.pop());
    }

    return result;
}

function getValue(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    return 0;
}

function isOp(op) {
    return ['+', '-', '*', '/'].includes(op);
}

function mathExpression(tokenized) {
    const stack = [];

   for (let i = 0; i < tokenized.length; ++i) {
        const token = tokenized[i];

        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let a = stack.pop();
            let b = stack.pop();

            switch(token) {
                case '+':
                    stack.push(b + a);
                    break;
                case '-':
                    stack.push(b - a);
                    break;
                case '*':
                    stack.push(b * a);
                    break;
                case '/':
                    if (a === 0) {
                        console.log("not dividing by zero");
                        process.exit(1);
                    }
                    stack.push(b / a);
                    break;
                default:
                    console.log("invalide operator");
                    process.exit(1);
            }
        }
   }

   return stack[0];
}

rl.question("Enter expression: ", (input) => {
    let tokenized = tokenizer(input);

    if (!tokenized) {
        console.log("invalid input");
        process.exit(1);
    }

    const midRes = foo(tokenized);
    const result = mathExpression(midRes);

    console.log(`The result: ${result}`);

    rl.close();
});