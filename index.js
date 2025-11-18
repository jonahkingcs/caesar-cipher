function codeMessage() {
    const message = document.getElementById("message").value;

    const isValid = isValidInput(message);

    if (isValid) {
        document.getElementById("output").value = message;
    } else {
        document.getElementById("output").value = "error";
    }
}