import * as React from 'react';

type ReduxContextInterface = {
  getState: () => Object;
  dispatch: (action: Object) => void;
  subscribe: (listener: Function) => void;
};

const ReduxContext = React.createContext<ReduxContextInterface | {}>({});

let {Provider: ReduxProvider, Consumer: ReduxConsumer} = ReduxContext;

export {ReduxContext, ReduxProvider, ReduxConsumer, ReduxContextInterface};
