import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import store from './lib/store';
import CounterContainer from './scenes/containers/CounterContainer';
import {Provider} from './context/Redux';
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CounterContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
