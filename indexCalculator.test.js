const indexCalculator = require("./indexCalculator.js");

test("It should return 6 when given 4 and 2", () => {
    expect(indexCalculator(4, 2)).toBe(6);
})

test("It should return 6 when given 4 and 28", () => {
    expect(indexCalculator(4, 28)).toBe(6);
})

test("It should return 0 when given 24 and 2", () => {
    expect(indexCalculator(24, 2)).toBe(0);
})

test("It should return 24 when given 0 and -2", () => {
    expect(indexCalculator(0, -2)).toBe(24);
})