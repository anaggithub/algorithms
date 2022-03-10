// A este le faltaria optimizarlo con dynamic programming y también que reciba coins como parámetro

const coins = [10, 6, 1]; 

// If value is 12, minimun coins required would be 2, because 6 + 6 = 12, and other options would need
// more than two coins, example: 10 + 1 + 1 (3 coins).
const makeChange = (value) => {

  if (value === 0) return 0;

  let minCoins;

  coins.forEach((coin) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin);
      if (minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });
  return minCoins + 1;
};

module.exports = makeChange;
