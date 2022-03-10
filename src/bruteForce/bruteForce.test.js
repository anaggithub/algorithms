const makeChange = require("./bruteForce");

describe("makeChange function", () => {
  test("should return 2 if coins input is [10, 6, 1]", () => {
    const expected = 2;
    const result = makeChange(12);
    expect(result).toEqual(expected);
  });
});
