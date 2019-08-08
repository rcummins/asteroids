const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", function() {
  window.ctx = document.getElementById("game-canvas").getContext('2d');
});
