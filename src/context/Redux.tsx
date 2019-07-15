import * as React from 'react';
import {ReduxProvider, ReduxContextInterface} from './reduxContext';

type Props = {
  store: ReduxContextInterface;
  children?: React.ReactNode;
};

function Provider(props: Props) {
  let {store, children} = props;
  return <ReduxProvider value={store}>{children}</ReduxProvider>;
}

export {Provider};
