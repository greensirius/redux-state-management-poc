import * as React from 'react';
import {
  ReduxContext,
  ReduxProvider,
  ReduxContextInterface
} from './reduxContext';

type Props = {
  store: ReduxContextInterface;
  children?: React.ReactNode;
};

function Provider(props: Props) {
  let {store, children} = props;
  return <ReduxProvider value={store}>{children}</ReduxProvider>;
}

function connect(mapStateToProps: Function, mapDispatchToProps: Function) {
  return (Component) => {
    class EnhancedComponent extends React.Component<any> {
      componentDidMount() {
        let store = this.context;
        store.subscribe(this._handleUpdate);
      }

      _handleUpdate = () => {
        this.forceUpdate();
      };

      render() {
        let store = this.context;
        let deriviedState = mapStateToProps(store.getState());
        let deriviedDispatch = mapDispatchToProps(store.dispatch);
        console.log('>>>>: ', deriviedDispatch);
        return <Component {...deriviedState} {...deriviedDispatch} />;
      }
    }
    EnhancedComponent.contextType = ReduxContext;
    return EnhancedComponent;
  };
}

export {Provider, connect};
