const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function() {
  window.ctx = document.getElementById("game-canvas").getContext('2d');
});
