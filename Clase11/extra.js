// Punto 3:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [primerNumero, , segundoNumero, , tercerNumero, ...restoNumeros] = numeros;

console.log(primerNumero); // 1
console.log(segundoNumero); // 3
console.log(tercerNumero); // 5
console.log(restoNumeros); // [2, 4, 6, 7, 8, 9, 10]

// Punto 4:
const mascota = {
  nombre: "Firulais",
  tipo: "Perro",
  color: "Café",
  raza: "Labrador"
};

const { nombre, tipo, color, raza } = mascota;

console.log(nombre); // "Firulais"
console.log(tipo); // "Perro"
console.log(color); // "Café"
console.log(raza); // "Labrador"
