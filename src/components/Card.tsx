import * as React from 'react';
import {View, Text, StyleSheet, ViewProps} from 'react-native';

type Props = ViewProps & {
  children?: React.ReactNode;
  render?: (data: any) => void;
};

export function Card(props: Props) {
  let {children, render} = props;
  let data = {userHistory: 'hello'};
  return (
    <View style={styles.container}>
      <Text>Card</Text>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {children}
        {render(data.userHistory)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    height: 200,
    width: 300,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DEF'
  }
});

export default Card;
