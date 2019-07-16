import * as React from 'react';
import Counter from '../Counter';
import {ReduxContext, ReduxConsumer} from '../../context/reduxContext';

function CounterContainerFn() {
  return (
    <ReduxConsumer>
      {(context) => {
        return <Counter store={context} />;
      }}
    </ReduxConsumer>
  );
}

class CounterContainerExpreimentalStatic extends React.Component<any> {
  static contextType = ReduxContext;
  render() {
    return <Counter store={this.context} />;
  }
}

class CounterContainer extends React.Component<any> {
  render() {
    return <Counter store={this.context} />;
  }
}
CounterContainer.contextType = ReduxContext;
export default CounterContainer;
