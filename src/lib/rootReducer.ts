type Reducers = {[key: string]: Function};

function rootReducer(reducerObj: Reducers) {
  return (state: Object, action: Object) => {
    let preserveState = {};
    let reducerKeys: Array<string> = Object.keys(reducerObj);
    for (let key of reducerKeys) {
      let reducer = reducerObj[key];
      preserveState[key] = reducer(state[key], action);
    }
    return preserveState;
  };
}

export default rootReducer;
