// Este método solo funciona si los arrays ya están ordenados, por eso no se agrega una validación para ello.
// La idea es llamarlo desde la función merge sort, desde arrays de un solo elemento y a medida que vayan uniéndose entre sí ya estarían siempre ordenados sus elementos,

//Versión mía usando recursión

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

// Versión del curso Front End Masters con while

// const merge = (left, right) => {
//   let result = [];
//   let indexLeft = 0,
//     indexRight = 0;

//   while (indexLeft < left.length && indexRight < right.length) {
//     if (left[indexLeft] < right[indexRight]) {
//       result.push(left[indexLeft]);
//       indexLeft++;
//     } else {
//       result.push(right[indexRight]);
//       indexRight++;
//     }
//   }
//   console.log(result);
//   return result.concat(left.slice(indexLeft).concat(right.slice(indexRight)));
// };

module.exports = mergeArrays;
