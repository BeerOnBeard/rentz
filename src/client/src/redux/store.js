import { createStore } from 'redux';
import { USER_RECEIVED, AUTHENTICATION_FAILED, CREATING_GAME, GAME_STARTED } from './events';
import Game from 'game';

function reducer(state = { mustLogIn: false }, event) {
  switch(event.type) {
    case AUTHENTICATION_FAILED:
      return { ...state, mustLogIn: true }
    case USER_RECEIVED:
      return { ...state, mustLogIn: false, user: event.data };
    case CREATING_GAME:
      return { ...state, isCreatingGame: true }
    case GAME_STARTED:
      let game = new Game(event.data.game);
      return { ...state, game: game, isCreatingGame: false };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
