const peliculas = require("./peliculas");
const fs = require("fs");
const uuid = require("uuid");

const msjPath = "mensaje.txt";

peliculas.forEach((element) => {
  console.log(element);
});

const msjText = fs.readFileSync(msjPath, "utf8");
console.log(msjText);
console.log(uuid.v4());
