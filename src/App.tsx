import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import store from './lib/store';
import CounterContainer from './scenes/containers/CounterContainer';
import CardContent from './components/CardContent';
import {Provider} from './context/Redux';

export const ReduxContext2 = React.createContext({
  name: 'hello'
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CounterContainer />
        <CardContent />
        <ReduxContext2.Provider value={null}>
          <ReduxContext2.Consumer>
            {(context) => {
              console.log({context});
              return <Text>Test</Text>;
            }}
          </ReduxContext2.Consumer>
        </ReduxContext2.Provider>
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
