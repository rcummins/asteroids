const Game = require('./game.js');

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  let gameView = this;

  this.bindKeyHandlers();

  setInterval( function() {
    gameView.game.step();
    gameView.game.draw(gameView.ctx);
  }, 20);
};

GameView.prototype.bindKeyHandlers = function() {
  let gameView = this;
  window.key('left', function() { gameView.game.ship.power([-1, 0]); });
  window.key('right', function() { gameView.game.ship.power([1, 0]); });
  window.key('up', function() { gameView.game.ship.power([0, -1]); });
  window.key('down', function() { gameView.game.ship.power([0, 1]); });
};

module.exports = GameView;
