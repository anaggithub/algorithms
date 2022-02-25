const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
  ]

function contarOvejas(ovejas) {
  const filteredOvejas = ovejas.filter((e) => {
    const nameArray = e.name.split("");
    const lowererdNameArray = nameArray.map((e) => e.toLowerCase());
    const nameIsValid =
      lowererdNameArray.includes("n") && lowererdNameArray.includes("a");
    const colorIsValid = e.color === "rojo";
    return nameIsValid && colorIsValid;
  });
  return filteredOvejas;
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);