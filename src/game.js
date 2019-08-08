const Asteroid = require('./asteroid.js');

function Game() {
  this.asteroids = [];

  this.addAsteroids();
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    let newAsteroid = new Asteroid(this, this.randomPosition());
    this.asteroids.push(newAsteroid);
  }
};

Game.prototype.randomPosition = function() {
  return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, 500, 500);

  this.asteroids.forEach( function(asteroid) {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach( function(asteroid) {
    asteroid.move();
  });
};

Game.prototype.wrap = function(pos) {
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
