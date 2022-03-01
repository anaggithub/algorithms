// Con el cache dentro, usando closure

const dynamicFibonacci = (num) => {
  let cache = {};

  const fibonacci = (num) => {
    if (cache[num]) return cache[num];
    else {
      if (num === 1) return 1;
      if (num === 0) return 0;
      const previous1 = fibonacci(num - 1);
      const previous2 = fibonacci(num - 2);
      cache[num] = previous1 + previous2;
      console.log("el cache: ", cache);
      return cache[num];
    }
  };

  return fibonacci(num);
};

// // Con el cache fuera
// let cache = {};

// const dynamicFibonacci = (num) => {

//   if (cache[num]) {
//     console.log("entró al if cache: ", cache);
//     return cache[num];
//   } else {
//     if (num === 1) return 1;
//     if (num === 0) return 0;
//     const previous1 = dynamicFibonacci(num - 1);
//     const previous2 = dynamicFibonacci(num - 2);
//     cache[num] = previous1 + previous2;
//     console.log("en el else, el cache: ", cache);
//     return cache[num];
//   }
// };

module.exports = dynamicFibonacci;
