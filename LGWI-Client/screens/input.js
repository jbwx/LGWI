import React from 'react';
import { View, TextInput, StyleSheet, Button, Image } from 'react-native';

export default function InputScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={require('../assets/Sanlian.png')} style={styles.image} />
      </View>
      <TextInput style={[styles.input, styles.textbox]} placeholder="Meter Reading"/>
      <TextInput style={[styles.input, styles.textbox]} placeholder="Meter ID" />
      <TextInput style={[styles.input, styles.textbox]} placeholder="Cost" />
      <View style={styles.buttonContainer}>
        <Button title="Submit" color="#03312E" onPress={() => console.log('Button pressed')} style={[styles.button]} />
      </View>
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
    width: 375,
    height: 375,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: '#03312E',
    marginBottom: 20,
    marginTop: -180, // Adjust the marginTop value to move the circle higher up
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Add this line to hide overflow
  },
  image: {
    width: 373,
    height: 373,
    borderRadius: 150,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  textbox: {
    borderRadius: 10,
    height: 50,
    width: 225,
    borderColor: '#03312E',
    backgroundColor: 'white',
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
    marginHorizontal: 40,
    backgroundColor: '#009F93',
    padding: 5,
    borderRadius: 10,
    position: 'absolute',
    bottom: 100,
    width: 150,
  },
});
