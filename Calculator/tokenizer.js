function tokenizer(input) {
    const regex = /\d+\.?\d*|\+|-|\*|\/|\(|\)/g;
    const tokens = input.match(regex);
    console.log(tokens);
    
    return tokens;
}

export default tokenizer;