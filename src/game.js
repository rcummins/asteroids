const Asteroid = require('./asteroid.js');
const Bullet = require('./bullet.js');
const Ship = require('./ship.js');

function Game() {
  this.asteroids = [];
  this.bullets = [];
  this.ship = new Ship(this, this.randomPosition());

  this.addAsteroids();
}

Game.BACKGROUND_COLOR = 'Black';
Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 10;

Game.prototype.add = function(object) {
  if (object instanceof Asteroid) {
    this.asteroids.push(object);
  } else if (object instanceof Bullet) {
    this.bullets.push(object);
  }
};

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    let newAsteroid = new Asteroid(this, this.randomPosition());
    this.add(newAsteroid);
  }
};

Game.prototype.allObjects = function () {
  return this.asteroids.concat(this.bullets).concat([this.ship]);
};

Game.prototype.checkCollisions = function() {
  let allObjects = this.allObjects();
  for (let index1 = 0; index1 < allObjects.length; index1++) {
    for (let index2 = index1 + 1; index2 < allObjects.length; index2++) {
      if (allObjects[index1].isCollidedWith(allObjects[index2])) {
        allObjects[index1].collideWith(allObjects[index2]);
      }
    }
  }
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = Game.BACKGROUND_COLOR;
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

  this.allObjects().forEach( function(object) {
    object.draw(ctx);
  });
};

Game.prototype.isOutOfBounds = function(pos) {
  return pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y;
};

Game.prototype.moveObjects = function() {
  this.allObjects().forEach( function(object) {
    object.move();
  });
};

Game.prototype.randomPosition = function () {
  return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];
};

Game.prototype.remove = function(object) {
  if (object instanceof Asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(object), 1);
  } else if (object instanceof Bullet) {
    this.bullets.splice(this.bullets.indexOf(object), 1);
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.wrap = function (pos) {
  let newPos = [];

  if (pos[0] < 0) {
    newPos[0] = pos[0] + Game.DIM_X;
  } else if (pos[0] > Game.DIM_X) {
    newPos[0] = pos[0] - Game.DIM_X;
  } else {
    newPos[0] = pos[0];
  }

  if (pos[1] < 0) {
    newPos[1] = pos[1] + Game.DIM_Y;
  } else if (pos[1] > Game.DIM_Y) {
    newPos[1] = pos[1] - Game.DIM_Y;
  } else {
    newPos[1] = pos[1];
  }

  return newPos;
};

module.exports = Game;
