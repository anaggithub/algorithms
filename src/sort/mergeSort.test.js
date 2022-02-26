const mergeSort = require("./mergeSort");

describe("sort array function", () => {
    test("should return a sorted array in ascending order", () => {
        const expected = [1, 4, 5, 10, 10];
        const array1 = [1, 10, 4, 10, 5];
        const result = mergeSort(array1);
        expect(result).toEqual(expected);
      });
});
