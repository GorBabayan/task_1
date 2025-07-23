function isValidInput(input) {
    const valid = /^[\d+\-*/().\s]+$/;
    return valid.test(input.trim());
}

export default isValidInput;