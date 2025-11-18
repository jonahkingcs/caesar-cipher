const letters = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"];

function codeMessage() {
    let originalMessage = document.getElementById("message").value;
    let message = originalMessage.toLowerCase();
    let encode = document.getElementById("encode");
    let shift = document.getElementById("shift").value;

    let isValid = isValidInput(message);

    if (isValid) {
        document.getElementById("output").value = isValid;
    } else {
        if (encode.checked) {
            let encodedMessage = encodeMessage(message, shift);
            document.getElementById("output").value = encodedMessage;
        } else {
            let decodeShift = 0 - Number(shift);
            let decodedMessage = encodeMessage(message, decodeShift);
            document.getElementById("output").value = decodedMessage;
        }
    }
}

function encodeMessage(message, shift) {
    let encodedMessage = ``
    for (let i = 0; i < message.length; i++) {
        if (message[i] == " ") {
            encodedMessage += " "
        } else {
            let index = letters.indexOf(message[i]);
            newIndex = calculateIndex(Number(index), Number(shift));
            encodedMessage += letters[newIndex];
        }
    }
    return encodedMessage
}

if (typeof module !== "undefined") {
    module.exports = encodeMessage;
}