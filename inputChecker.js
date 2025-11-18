// no numbers
// no special characters
// less than 1000 characters

function isValidInput(message) {
    if (/[0-9]/.test(message)) return false;
    if (message.length > 1000) return false;
}

module.exports = isValidInput;