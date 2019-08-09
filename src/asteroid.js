const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Bullet = require('./bullet.js');
const Ship = require("./ship.js");

function Asteroid(game, pos) {
  MovingObject.call(
    this,
    {game: game,
      pos: pos,
      vel: Util.randomVec(2),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR});
}

Asteroid.RADIUS = 15;
Asteroid.COLOR = "gray";

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  } else if (otherObject instanceof Bullet) {
    this.game.remove(this);
    this.game.remove(otherObject);
  }
};

module.exports = Asteroid;
