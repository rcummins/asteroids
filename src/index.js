const Game = require("./game.js");
window.Game = Game;

document.addEventListener("DOMContentLoaded", function() {
  window.ctx = document.getElementById("game-canvas").getContext('2d');
});
