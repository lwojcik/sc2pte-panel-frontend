import reducer from './reducer';

function createStore(reducer) {
  let state;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    // Call the reducer to get the new state
    state = reducer(state, action);
    // Notify the subscribers
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  return {
    dispatch,
    getState,
    subscribe,
  }
}

export default createStore(reducer);