const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

function Bullet(game, pos) {
  MovingObject.call(
    this, 
    {game: game,
      pos: pos,
      vel: [game.ship.vel[0] * 4, game.ship.vel[1] * 4],
      radius: Bullet.RADIUS,
      color: Bullet.COLOR}
  );
}

Bullet.RADIUS = 5;
Bullet.COLOR = 'Red';

Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = function() {
  return false;
};

module.exports = Bullet;
