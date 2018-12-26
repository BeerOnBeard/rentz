import { createStore } from 'redux';
import { USER_RECEIVED, AUTHENTICATION_FAILED } from './events';

function reducer(state = { mustLogIn: false }, event) {
  switch(event.type) {
    case AUTHENTICATION_FAILED:
      return { ...state, mustLogIn: true }
    case USER_RECEIVED:
      return { ...state, mustLogIn: false, user: event.data };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
