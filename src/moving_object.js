const Util = require('./util.js');

function MovingObject(options) {
  this.game = options.game;
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI
  );

  ctx.fill();
};

MovingObject.prototype.collideWith = function(otherObject) {
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let distance = Util.distance(this.pos, otherObject.pos);
  let sumOfRadii = this.radius + otherObject.radius;
  return distance < sumOfRadii;
};

MovingObject.prototype.isWrappable = function() {
  return true;
};

MovingObject.prototype.move = function() {
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  if (this.game.isOutOfBounds(this.pos)) {
    if (this.isWrappable()) {
      this.pos = this.game.wrap(this.pos);
    } else {
      this.game.remove(this);
    }
  }
};

module.exports = MovingObject;
