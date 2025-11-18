// no numbers
// no special characters
// less than 1000 characters

function isValidInput(message) {
    // If message has any number or special character return false
    if (/[0-9!@#$%^&*()-+?_=,<>]/.test(message)) return "Message can't contain numbers or special characters";

    // If message has more than 1000 characters return false
    if (message.length > 1000) return "Message can't be longer than 1,000 characters";

    // Otherwise return true
    return null;
}

if (typeof module !== "undefined") {
    module.exports = isValidInput;
}