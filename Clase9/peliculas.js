// Array de objetos literales que contiene información sobre algunas películas favoritas
const peliculas = [
    {
      id: 1,
      titulo: "El Padrino",
      rating: 9.2,
      awards: ["Oscar Mejor Película", "Oscar Mejor Actor"],
      duracion: 175,
      precio: 12.99,
      genero: "Drama"
    },
    {
      id: 2,
      titulo: "Toy Story",
      rating: 8.3,
      awards: ["Oscar Mejor Canción Original"],
      duracion: 81,
      precio: 7.99,
      genero: "Animación"
    },
    {
      id: 3,
      titulo: "Jurassic Park",
      rating: 8.1,
      awards: ["Oscar Mejores Efectos Visuales"],
      duracion: 127,
      precio: 10.99,
      genero: "Aventuras"
    },
    {
      id: 4,
      titulo: "La La Land",
      rating: 8.0,
      awards: ["Oscar Mejor Director"],
      duracion: 128,
      precio: 11.99,
      genero: "Comedia Musical"
    },
    {
      id: 5,
      titulo: "El Silencio de los Inocentes",
      rating: 8.6,
      awards: ["Oscar Mejor Película", "Oscar Mejor Director"],
      duracion: 118,
      precio: 9.99,
      genero: "Suspenso"
    }
  ];
  
  // Exportamos el array de películas para ser usado en otros archivos de nuestro proyecto
  module.exports = peliculas;