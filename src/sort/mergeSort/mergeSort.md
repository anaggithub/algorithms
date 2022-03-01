# Call Stack Game

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

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return mergeArrays(sortedLeft, sortedRight);
};

## mergeSort([3,1,5,2]) // [1,2,3,5]

middle = 2;
left = [3,1]
right = [5,2]

sortedLeft = mergeSort([3,1]) // [1,3]

---------
    mergeSort([3,1]) 
    middle = 1;
    left = [3];
    right = [1];

    sortedLeft = mergeSort([3])  // 3

        ------------
        mergeSort([3]) // 3

    sortedRight =  mergeSort([1]) // 1

       ------------
        mergeSort([1]) // 1
    
    RETURN mergeArrays(sortedLeft, sortedRight); // [1,3]

        ------------
        mergeArrays([3], [1])   // [1,3]

sortedRight = mergeSort([5,2])  // [2,5]

---------
    mergeSort([5,2]) 
    middle = 1;
    left = [5];
    right = [2];

    sortedLeft = mergeSort([5])   // 5
    sortedRight =  mergeSort([2]) // 1

    RETURN mergeArrays(sortedLeft, sortedRight); // [2,5]

 RETURN mergeArrays([1,3],  [2,5]); // [1,2,4,5]

 
## mergeSort([3,1,5,2,8,4]) // [1,2,3,4,5,8]

middle = 3;  // 6/2 = 3
left = [3,5,1]
right = [2,8,4]

sortedLeft = mergeSort([3,1,5]) // 

---------
    mergeSort([3,1]) 
    middle = 1;
    left = [3];
    right = [5,1];

    sortedLeft = mergeSort([3])
    sortedLeft = [3]
    sortedRight =  mergeSort([5,1])

        ---------
            mergeSort([5,1])
            middle = 1;
            left = [5];
            right = [1];

            sortedLeft = mergeSort([5])   // 5
            sortedRight =  mergeSort([1]) // 1

            return mergeArrays(sortedLeft, sortedRight); // [1,5] 
    
    sortedRight = [1,5] 

    return mergeArrays([3], [1,5] ); // [1,3,5] 

sortedLeft = [1,3,5]

ahora repite lo mismo con la parte derecha.