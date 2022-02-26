const mergeArrays = require('./mergeArrays');

describe('merge arrays function', () => {

    test('should return a sorted array in ascending order', () => {
        const expected = [1,4,5,10];
        const array1 = [1,4], array2 = [5,10];
        const result = mergeArrays(array1, array2);
        expect(result).toEqual(expected);
    })
    test('should return a sorted array if any of the arrays are empty', () => {
        const expected = [1,2];
        const array1 = [1,2], array2 = [];
        const result = mergeArrays(array1, array2);
        expect(result).toEqual(expected);
    })

    test('should return a sorted array if any of the arrays are empty', () => {
        const expected = [1,5,6];
        const array1 = [], array2 = [1,5,6];
        const result = mergeArrays(array1, array2);
        expect(result).toEqual(expected);
    })
})
