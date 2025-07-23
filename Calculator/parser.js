import { getValue, isOp } from './helpers.js';

function infixToPostfix(tokenized) {
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
            stack.push(token);
        }
    }

    while (stack.length) {
        result.push(stack.pop());
    }

    console.log(result);
    return result;
}

export default infixToPostfix;