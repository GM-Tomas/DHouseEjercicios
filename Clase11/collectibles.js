const fs = require("fs");

function importar(marca) {
  let files = {
    "hotToys": "datos/figuras1.json",
    "bandai": "datos/figuras2.json",
    "starWars": "datos/figuras3.json",
  };

  const data = fs.readFileSync(files[marca]);
  const collectibles = JSON.parse(data);

  return collectibles;
}

module.exports = importar;
