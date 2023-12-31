const wrapping = require("./index.js");

describe("Challenge 01", () => {
  test("Test #01 - expected return type", () => {
    expect(Array.isArray(wrapping([]))).toBe(true);
  });

  test("Test #02 - expected wrapping(gifts)", () => {
    const gifts = ["cat", "game", "socks"];
    const expectedResult = ["*****\n*cat*\n*****", "******\n*game*\n******", "*******\n*socks*\n*******"];

    expect(wrapping(gifts)).toEqual(expectedResult);
  });

  test(`Test #03 - expected wrapping(["midu"])`, () => {
    const midu = ["midu"];
    const expectedResult = ["******\n*midu*\n******"];

    expect(wrapping(midu)).toEqual(expectedResult);
  });

  test(`Test #04 - expected wrapping(["a"])`, () => {
    const a = ["a"];
    const expectedResult = ["***\n*a*\n***"];

    expect(wrapping(a)).toEqual(expectedResult);
  });

  test("Test #05 - expected wrapping an empty array should return an empty array", () => {
    expect(wrapping([])).toEqual([]);
  });
});
