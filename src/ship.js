const Util = require('./util.js');
const MovingObject = require('./moving_object.js');
const Bullet = require('./bullet.js');

function Ship(game, pos) {
  MovingObject.call(
    this, 
    {game: game,
      pos: pos,
      vel: [0, 0],
      radius: Ship.RADIUS,
      color: Ship.COLOR}
  );
}

Ship.RADIUS = 15;
Ship.COLOR = 'Orange';

Util.inherits(Ship, MovingObject);

Ship.prototype.fireBullet = function() {
  let newBullet = new Bullet(this.game, this.pos);
  this.game.add(newBullet);
};

Ship.prototype.power = function(impulse) {
  this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
};

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};

module.exports = Ship;
