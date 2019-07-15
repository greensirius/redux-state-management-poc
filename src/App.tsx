import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import store from './lib/store';
import Counter from './scenes/Counter';
import Card from './components/Card';
import CardContent from './components/CardContent';
export default function App() {
  return (
    <View style={styles.container}>
      <Card render={(data) => <CardContent data={data} />} />
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
