import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import store from './lib/store';
import Counter from './scenes/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter store={store} />
    </View>
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
