
  const array1 = [] , array2 = [1,9];

  let mergedList = [];

  export const mergeSort = (list1, list2) => {
    const list1Copy = [...list1];
    const list2Copy = [...list2];
    if (!list1Copy.length && !list2Copy.length) return mergedList;

    if (list1Copy[0] < list2Copy[0] || !list2Copy.length ) {
      mergedList.push(list1Copy[0]);
      list1Copy.shift();
    } else {
      mergedList.push(list2Copy[0]);
      list2Copy.shift();
    }
    mergeSort(list1Copy, list2Copy)
  };

  mergeSort(array1, array2);
  console.log(mergedList);
