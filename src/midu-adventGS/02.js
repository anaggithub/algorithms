const carta = "bici coche balón _playstation bici coche peluche";

function listGifts(letter) {
  const letterArray = letter.split("").map((e) => e.trim());
  const regex = /^_/;
  const regalos = letterArray.reduce((acc, current, index, array) => {
    if (regex.test(e)) {
      return null;
    }
    acc[current] = acc[current] + 1;
  }, {});
}

const regalos = listGifts(carta);

console.log(regalos(carta));
