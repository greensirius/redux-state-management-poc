type ObjectOf<T> = {[key: string]: T};

function createStore(reducers: Function): Object {
  let globalState = {};
  let listeners: Array<Function> = [];
  let getState = () => globalState;
  let dispatch = (action?: Object) => {
    let newState = reducers(globalState, action);
    globalState = newState;
    listeners.forEach((listener) => listener());
  };
  let subscribe = (listener: Function) => {
    listeners.push(listener);
  };
  dispatch({type: undefined});
  return {
    getState,
    dispatch,
    subscribe
  };
}

export default createStore;
