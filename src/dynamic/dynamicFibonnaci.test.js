const dynamicFibonacci = require("./dynamicFibonacci");

describe("fibonacci function", () => {
  test("fibonnaci 4 should return 3", () => {
    const expected = 3;
    const result = dynamicFibonacci(4);
    expect(result).toEqual(expected);
  });
});
