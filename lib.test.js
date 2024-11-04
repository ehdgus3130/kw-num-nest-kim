const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("prime(7) should be true", () => {
    expect(lib.prime(7)).toBe(true);
});

test("prime(4) should be false", () => {
    expect(lib.prime(4)).toBe(false);
});

test("prime(1) should be false", () => {
    expect(lib.prime(1)).toBe(false);
});

test("factorial(1) should be 1", () => {
    expect(lib.factorial(1)).toBe(1);
});

test("factorial(10) should be 3628800", () => {
    expect(lib.factorial(10)).toBe(3628800);
});