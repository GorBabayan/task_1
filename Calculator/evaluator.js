function mathExpression(tokenized) {
    const stack = [];

   for (let i = 0; i < tokenized.length; ++i) {
        const token = tokenized[i];

        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            if (stack.length < 2) {
                throw new Error("not enough operands");
            }

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
                       throw new Error("not divide by zero");
                    }
                    stack.push(b / a);
                    break;
                default:
                    throw new Error("invalid operator");
            }
        }
   }

   if (stack.length != 1) {
        throw new Error("Invalid expression");
   }

   return stack[0];
}

updated-task
export default mathExpression;

module.exports = { mathExpression };
main
