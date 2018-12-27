const EventStore = require('event-store-client');
const Game = require('./GameCommandDecorator');

function transformStoredEventToDomainEvent(storedEvent) {
  return {
    type: storedEvent.eventType,
    data: storedEvent.data
  };
}

function transformDomainEventToWriteEvent(domainEvent) {
  return {
    eventId: domainEvent.eventId,
    eventType: domainEvent.type,
    data: domainEvent.data
  };
}

class GameRepository {
  _buildStreamName(gameId) {
    return `Game-${gameId}`;
  }

  constructor(connection, username, password) {
    this._connection = connection;
    this._credentials = { username, password};
  }

  get(id) {
    return new Promise(resolve => {
      let game = new Game();
      this._connection.readStreamEventsForward(
        this._buildStreamName(id),
        0,
        1000,
        false,
        false,
        storedEvent => game.apply(transformStoredEventToDomainEvent(storedEvent)),
        this._credentials,
        () => resolve(game)
      );
    });
  }

  save(game) {
    let gameCopy = game.copy();
    let uncommittedEvents = gameCopy._uncommittedEvents.splice(0).map(event => transformDomainEventToWriteEvent(event));
    return new Promise(resolve => {
      this._connection.writeEvents(
        this._buildStreamName(gameCopy.id),
        EventStore.ExpectedVersion.Any,
        false,
        uncommittedEvents,
        this._credentials,
        _ => resolve(gameCopy)
      );
    });
  }
}

module.exports = GameRepository;
