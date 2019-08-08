const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

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

Ship.RADIUS = 20;
Ship.COLOR = 'Orange';

Util.inherits(Ship, MovingObject);

module.exports = Ship;