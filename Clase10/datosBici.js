const fs = require("fs");
const bicicletasJSON = fs.readFileSync("bicicletas.json", "utf8");

module.exports = JSON.parse(bicicletasJSON);
