import createStore from './createStore';
import counterReducer from './counterReducer';
import inputReducer from './inputReducer';
import rootReducer from './rootReducer';
type Store = {
  getState: () => void;
  dispatch: (action: object) => void;
  subscribe: (listener: Function) => void;
};

let store: any = createStore(
  rootReducer({counter: counterReducer, input: inputReducer})
);

console.log(store.getState());
console.log(store.dispatch({type: 'INCREMENT'}));
console.log(store.getState());
