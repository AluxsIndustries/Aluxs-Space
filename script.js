// Frases motivacionales
const frases = [
  "El universo no está fuera de ti. Mira dentro de ti; todo lo que quieres, ya eres. 🌌",
  "Somos polvo de estrellas tratando de comprender las estrellas. ✨",
  "No mires las estrellas como si estuvieran lejos, están dentro de ti. 🌠",
  "El espacio no tiene límites, y tus sueños tampoco. 🚀",
  "Quizá seamos pequeños, pero nuestra curiosidad es infinita. 🌍"
];

function mostrarFrase() {
  const randomIndex = Math.floor(Math.random() * frases.length);
  document.getElementById("frase").textContent = frases[randomIndex];
}