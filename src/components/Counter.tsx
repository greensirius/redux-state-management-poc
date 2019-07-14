import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Counter extends React.Component<any, any> {
  componentDidMount() {
    let {subscribe} = this.props.store;
    subscribe(() => {
      this.forceUpdate();
    });
  }
  _incrementHandle = () => {
    let {dispatch} = this.props.store;
    dispatch({type: 'INCREMENT'});
  };

  render() {
    let {getState} = this.props.store;
    let text = this.props.store.getState().counter.counter;

    return (
      <View>
        <Text>{text}</Text>
        <TouchableOpacity
          onPress={this._incrementHandle}
          style={{padding: 10, backgroundColor: '#009', borderRadius: 5}}
        >
          <Text>Increment</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Counter;
