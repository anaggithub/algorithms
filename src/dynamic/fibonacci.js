const fibonacci = (num) => {

  if (num === 1) return 1;
  if (num === 0) return 0;

  const previous1 = fibonacci(num - 1);
  const previous2 = fibonacci(num - 2);

  return previous1 + previous2;

};

module.exports = fibonacci;
