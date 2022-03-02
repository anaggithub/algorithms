const tests = [
  { data: [9, 2, 5, 6, 4, 3, 7, 10, 1, 8] }, // random data
  { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }, // ordered data
  { data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] }, // reversed data
];

function bubbleSort(array) {
  let swapped; // testigo para identificar si es necesario seguir ordenando el array
  let count = 0; // cuantas veces hizo el swap
  let countInner = 0;
  let countOuter = 0;

  do {
    countOuter++;
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      countInner++;
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
        count++;
      }
    }
  } while (swapped);
  //return { data: array, swaps: count };
  // console.log("countOuter: ", countOuter);
  // console.log("countInner: ", countInner);
  // console.log("countSwap: ", count);

  return array;
}

// console.table(
//   tests.reduce((log, e) => {
//     const { data, swaps } = bubbleSort(e.data);
//     log.push(`Result: ${data}, Swaps: ${swaps}`);
//     return log;
//   }, [])
// );

module.exports = bubbleSort;
