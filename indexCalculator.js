function calculateIndex(index, shift) {
    // add together the letters index with the shift to get the new index
    let newIndex = index + shift;

    // if it is above 25 get the remainder from 26, if below 0 add 26
    if (newIndex > 25) {
        newIndex = newIndex % 26;
    } else if (newIndex < 0) {
        newIndex += 26;
    }

    // returns newIndex
    return newIndex
}

if (typeof module !== "undefined") {
    module.exports = calculateIndex;
}