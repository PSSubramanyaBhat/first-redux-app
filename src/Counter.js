import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {addition, subtraction} from './store/actions';

const Counter = (props) => {
  //   const [counter, setCounter] = useState(0);

  //   const additionHandler = () => {
  //     setCounter((x) => x + 1);
  //   };

  //   const subtractionHandler = () => {
  //     setCounter((x) => x - 1);
  //   };

  //   const data = useSelector((state) => state.counter);
  const data = useSelector((state) => state);
  const {counter, name} = data;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button
        title="Add"
        onPress={() => {
          //   additionHandler();
          dispatch(addition());
        }}></Button>
      <Text>{counter}</Text>
      <Text>{name}</Text>
      <Button
        title="Subtract"
        onPress={() => {
          //   subtractionHandler();
          dispatch(subtraction());
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Counter;
