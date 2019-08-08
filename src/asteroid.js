const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Asteroid(pos) {
  MovingObject.call(
    this,
    {pos: pos,
    vel: Util.randomVec(5),
    radius: Asteroid.RADIUS,
    color: Asteroid.COLOR});
}

Asteroid.RADIUS = 20;
Asteroid.COLOR = "gray";

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;