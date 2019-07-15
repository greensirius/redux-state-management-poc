import * as React from 'react';
import {View, Text} from 'react-native';

export default function CardContent(props: {data: string}) {
  let {data} = props;
  console.log(data);
  return (
    <View>
      <Text>Card Component</Text>
      <Text>{data}</Text>
    </View>
  );
}
