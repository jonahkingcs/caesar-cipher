function codeMessage() {
    const message = document.getElementById("message").value;

    const isValid = isValidInput(message);

    if (isValid) {
        document.getElementById("output").value = isValid;
    } else {
        document.getElementById("output").value = message;
    }
}