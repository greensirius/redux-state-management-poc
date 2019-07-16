import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from '../context/Redux';

function CardContent(props: {increment: () => void; num: {counter: number}}) {
  let {num} = props;
  return (
    <View>
      <Text>Card Component</Text>
      <Text>{num.counter}</Text>
      <TouchableOpacity onPress={() => props.increment()}>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state: any) => {
  return {
    num: state.counter
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    increment: () => dispatch({type: 'INCREMENT'})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContent);
