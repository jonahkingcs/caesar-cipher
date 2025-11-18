const calculateIndex = require("./indexCalculator.js");

global.calculateIndex = calculateIndex;

const encodeMessage = require("./index.js");


test("Should return 'ifmmp xpsme' when given a message of 'hello world' and shift of 1", () => {
    expect(encodeMessage("hello world", 1)).toBe("ifmmp xpsme");
})

test("Should return 'byffi qilfx' when given a message of 'hello world' and shift of 20", () => {
    expect(encodeMessage("hello world", 20)).toBe("byffi qilfx");
})

test("Should return 'hello world' when given a message of 'ifmmp xpsme' and shift of -1", () => {
    expect(encodeMessage("ifmmp xpsme", -1)).toBe("hello world");
})

test("Should return 'hello world' when given a message of 'byffi qilfx' and shift of -20", () => {
    expect(encodeMessage("byffi qilfx", -20)).toBe("hello world");
})