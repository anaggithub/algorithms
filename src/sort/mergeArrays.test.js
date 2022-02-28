const mergeArrays = require('./mergeArrays');

describe('merge arrays function', () => {

    test('should return a sorted array in ascending order', () => {
        const expected = [1,4,5,6,10];
        const array1 = [1,5], array2 = [4,6,10];
        const result = mergeArrays(array1, array2);
        expect(result).toEqual(expected);
    })
    test('should return first array if 2nd array is empty', () => {
        const array1 = [1,2], array2 = [];
        const result = mergeArrays(array1, array2);
        expect(result).toEqual(array1);
    })

    test('should return a second array if 1st array is empty', () => {
        const array1 = [], array2 = [1,5,6];
        const result = mergeArrays(array1, array2);
        expect(result).toEqual(array2);
    })
})
