const importar = require("./collectibles.js");

let starWars = "starWars";
let bandai = "bandai";
let hotToys = "hotToys";

let starWarsArray = importar(starWars);
let bandaiArray = importar(bandai);
let hotToysArray = importar(hotToys);

let unifiedCollectibles = [...starWarsArray, ...bandaiArray, ...hotToysArray];

const collectibles = {
  figuras: unifiedCollectibles,
  listFigures: function () {
    for (const element of this.figuras) {
      console.log(element);
    }
  },
  figuresByBrand: function (marca) {
    return this.figuras.filter((item) => item.marca == marca);
  },
};

console.log(collectibles.figuresByBrand("Bandai"));
