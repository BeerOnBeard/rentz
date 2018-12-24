import { createStore } from 'redux';
import { USER_RECEIVED } from './events';

function reducer(state = {}, event) {
  switch(event.type) {
    case USER_RECEIVED:
      return { ...state, user: event.data };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;