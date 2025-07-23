function isValidInput(input) {
    const valid = /^[\d+\-*/().\s]+$/;
    return valid.test(input.trim());
}

updated-task
export default isValidInput;

module.exports = { isValidInput };
main
