import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';



export default function InputScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <TextInput style={styles.input} placeholder="Input 1" />
      <TextInput style={styles.input} placeholder="Input 2" />
      <TextInput style={styles.input} placeholder="Input 3" />
      <Button title="Submit" onPress={() => console.log('Button pressed')} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 20,
    marginTop: -180, // Adjust the marginTop value to move the circle higher up
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


