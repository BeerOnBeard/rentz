import { createStore } from 'redux';
import { USER_RECEIVED, AUTHENTICATION_FAILED } from './events';
import Game from 'game';
import { GAME_CREATED } from 'game/events';

function reducer(state = { mustLogIn: false }, event) {
  switch(event.type) {
    case AUTHENTICATION_FAILED:
      return { ...state, mustLogIn: true }
    case USER_RECEIVED:
      return { ...state, mustLogIn: false, user: event.data };
    case GAME_CREATED:
      let game = new Game();
      game.apply(event);
      return { ...state, game: game };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
