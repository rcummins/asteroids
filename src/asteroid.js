const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

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

module.exports = Asteroid;