const peliculas = require('./peliculas');
const fs = require('fs');

const msjPath='mensaje.txt';

peliculas.forEach(element => {
  console.log(element);
});

const msjText = fs.readFileSync(msjPath, 'utf8');
console.log(msjText);
