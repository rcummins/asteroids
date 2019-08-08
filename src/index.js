const GameView = require("./game_view.js");

document.addEventListener("DOMContentLoaded", function() {
  window.ctx = document.getElementById("game-canvas").getContext('2d');
  const gameView = new GameView(ctx);
  gameView.start();
});
