const mergeArrays = require("./mergeArrays");

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return mergeArrays(sortedLeft, sortedRight);
};

module.exports = mergeSort;
