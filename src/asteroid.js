const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Ship = require("./ship.js");

function Asteroid(game, pos) {
  MovingObject.call(
    this,
    {game: game,
      pos: pos,
      vel: Util.randomVec(5),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR});
}

Asteroid.RADIUS = 20;
Asteroid.COLOR = "gray";

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }
};

module.exports = Asteroid;