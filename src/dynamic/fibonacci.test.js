const fibonacci = require("./fibonacci");

describe("fibonacci function", () => {
  test("fibonnaci 0 should return 0", () => {
    const expected = 0;
    const result = fibonacci(0);
    expect(result).toEqual(expected);
  });
  test("fibonnaci 1 should return 1", () => {
    const expected = 1;
    const result = fibonacci(1);
    expect(result).toEqual(expected);
  });
  test("fibonnaci 2 should return sum of 2 previous fibonnaci's numbers", () => {
    const expected = 1;
    const previous1 =  fibonacci(2-1)
    const previous2 =  fibonacci(2-2)
    const result = previous1 + previous2;
    expect(result).toEqual(expected);
  });
  test("fibonnaci 3 should return sum of 2 previous fibonnaci's numbers", () => {
    const expected = 2;
    const previous1 =  fibonacci(3-1)
    const previous2 =  fibonacci(3-2)
    const result = previous1 + previous2;
    expect(result).toEqual(expected);
  });
  test("fibonnaci 4 should return sum of 2 previous fibonnaci's numbers", () => {
    const expected = 3;
    const previous1 =  fibonacci(4-1)
    const previous2 =  fibonacci(4-2)
    const result = previous1 + previous2;
    expect(result).toEqual(expected);
  });
  test("fibonnaci 14 should return sum of 2 previous fibonnaci's numbers", () => {
    const expected = 377;
    const previous1 =  fibonacci(14-1)
    const previous2 =  fibonacci(14-2)
    const result = previous1 + previous2;
    expect(result).toEqual(expected);
  });
});
