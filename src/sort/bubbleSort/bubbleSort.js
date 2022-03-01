function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const bubbleSort = (array) => {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;
  for (var i = 0; i < array.length; i++) {
    countOuter++;
    for (var j = 0; j < array.length; j++) {
      countInner++;
      if (array[(j = 1)] > array[j]) {
        countSwap++;
        swap(array, j - 1, j);
      }
    }
  }
  return array;
};

module.exports = bubbleSort;
