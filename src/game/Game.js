const { GAME_CREATED } = require('./events');

class Game {
  _created(event) {
    this.id = event.data.id;
  }

  constructor(game) {
    if (!game) {
      game = {};
    }

    this.id = game.id;
  }

  apply(event) {
    switch(event.type) {
      case GAME_CREATED:
        this._created(event);
    }
  }
}

module.exports = Game;
