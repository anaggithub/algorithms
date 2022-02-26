// Este método solo funciona si los arrays ya están ordenados

const mergeArrays = (array1, array2) => {
  let mergedArrays = [];

  const merge = (array1, array2) => {
    const array1Copy = [...array1];
    const array2Copy = [...array2];
    if (!array1Copy.length && !array2Copy.length) return mergedArrays;
    if (array1Copy[0] < array2Copy[0] || !array2Copy.length) {
      mergedArrays.push(array1Copy[0]);
      array1Copy.shift();
    } else {
      mergedArrays.push(array2Copy[0]);
      array2Copy.shift();
    }
    merge(array1Copy, array2Copy);
  };

  merge(array1, array2);
  return mergedArrays;
};

module.exports = mergeArrays;
