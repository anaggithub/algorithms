const mergeArrays = require('./mergeArrays');

describe('merge arrays function', () => {

    test('should return a sorted array in ascending order', () => {
        const expected = [1,2,4,5];
        const array1 = [1,4], array2 = [5,2];
        const result = mergeArrays(array1, array2);
        expect(result).toBe(expected);
    })
})
