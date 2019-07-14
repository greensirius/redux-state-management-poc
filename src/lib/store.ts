import createStore from './createStore';
import counterReducer from './reducers/counterReducer';
import inputReducer from './reducers/inputReducer';
import rootReducer from './reducers/rootReducer';
type Store = {
  getState: () => void;
  dispatch: (action: object) => void;
  subscribe: (listener: Function) => void;
};

let store: any = createStore(
  rootReducer({counter: counterReducer, input: inputReducer})
);

export default store;
