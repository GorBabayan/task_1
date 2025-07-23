function getValue(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    return 0;
}

function isOp(op) {
    return ['+', '-', '*', '/'].includes(op);
}

module.exports = { getValue, isOp };