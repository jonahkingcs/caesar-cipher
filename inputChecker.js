// no numbers
// no special characters
// less than 1000 characters

function isValidInput(message) {
    // If message has any number or special character return false
    if (/[0-9!@#$%^&*()-+?_=,<>]/.test(message)) return false;

    // If message has more than 1000 characters return false
    if (message.length > 1000) return false;

    // Otherwise return true
    return true;
}

module.exports = isValidInput;