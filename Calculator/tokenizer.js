function tokenizer(input) {
    const regex = /\d+\.?\d*|\+|-|\*|\/|\(|\)/g;
    const tokens = input.match(regex);

    return tokens;
}

module.exports = { tokenizer };