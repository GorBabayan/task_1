function tokenizer(input) {
    const regex = /\d+\.?\d*|\+|-|\*|\/|\(|\)/g;
    const tokens = input.match(regex);

    return tokens;
}

updated-task
export default tokenizer;

module.exports = { tokenizer };
main
