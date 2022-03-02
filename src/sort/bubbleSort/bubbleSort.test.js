//const bubbleSort = require("./bubbleSort");
const bubbleSort = require("./optimizedBubbleSort");

describe("bubbleSort function", () => {
    test("should return a sorted array in ascending order", () => {
        const expected = [2,3,5]
        const array1 = [3,2,5]
        const result = bubbleSort(array1);
        expect(result).toEqual(expected);
      });
});
