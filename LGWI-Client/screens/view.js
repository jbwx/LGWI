import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, TextInput } from 'react-native';

export default function ViewScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>

      <ScrollView style={styles.card}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <View style={styles.buttonContainer}>
            <Button title="Search" color="black" style={styles.button} onPress={() => console.log('Search button pressed')} />
          </View>
        </View>
        <Text style={styles.text}>Line 1</Text>
        <Text style={styles.text}>Line 2</Text>
        <Text style={styles.text}>Line 3</Text>
        <Text style={styles.text}>Line 4</Text>
        <Text style={styles.text}>Line 5</Text>
        <Text style={styles.text}>Line 6</Text>
        <Text style={styles.text}>Line 7</Text>
      </ScrollView>
      <View style={styles.buttonBottomContainer}>
        <Button title="Back" color="black" style={styles.button} onPress={() => navigation.goBack()} />
        <Button title="Edit" color="black" style={styles.button} onPress={() => console.log('Edit button pressed')} />
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
  card: {
    width: '90%',
    height: '75%',
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    top: 15,
    padding: 10, // Add padding to fit the searchContainer
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: 'darkgrey',
    borderRadius: 8,
    padding: 10,
  },
  buttonBottomContainer: {
    flexDirection: 'row',
    marginTop: 40,
    borderWidth: 1,
    justifyContent: 'space-between',
    marginHorizontal: 40,
    backgroundColor: 'darkgrey',
    padding: 5,
    borderRadius: 10,
    position: 'absolute',
    bottom: 100,
  },
  button: {
    backgroundColor: 'darkgrey',
    borderColor: 'darkgrey',
    padding: 15,
    textAlign: 'center',
    borderRadius: 5,
    width: '30%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'darkgrey',
    borderRadius: 8,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  buttonContainer: {
    width: 100,
    height: 40,
    backgroundColor: 'darkgrey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});


