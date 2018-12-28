const Game = require('game');
const { GAME_CREATED } = require('game/events');
const generateGuid = require('uuid/v4');

const EventFactory = {
  created: function(id, virtualPlayers) {
    return { 
      eventId: generateGuid(),
      type: GAME_CREATED,
      data: { id, virtualPlayers }
    };
  }
};

class GameCommandDecorator extends Game {
  _publish(event) {
    this.apply(event);
    this._uncommittedEvents.push(event);
  }

  constructor() {
    super();
    this._uncommittedEvents = [];
  }

  create(id, virtualPlayers) {
    if (this.id !== undefined) {
      throw Error('Game already exists');
    }

    this._publish(EventFactory.created(id, virtualPlayers));
  }

  copy() {
    let gameCopy = new Game(this);
    gameCopy._uncommittedEvents = this._uncommittedEvents;
    return gameCopy;
  }
}

module.exports = GameCommandDecorator;
