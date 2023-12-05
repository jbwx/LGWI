import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function ViewScreen({ navigation, Component }) {
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState({
    selectedValue: '',
    category: [
      {
        ItemName: 'All',
      },
      {
        ItemName: 'Name',
      },
      {
        ItemName: 'Paid',
      },
      {
        ItemName: 'Owed',
      }
    ]
  });

  const handleFilterChange = (value) => {
    setFilter({ ...filter, selectedValue: value });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.card}>
        <Picker
          style={[styles.picker]}
          itemStyle={{ height: 50 }}
          mode="dropdown"
          selectedValue={filter.selectedValue}
          onValueChange={handleFilterChange}
        >
          {filter.category.map((item, index) => (
            <Picker.Item
              key={index}
              label={item.ItemName}
              value={item.ItemName}
              color='black'
            />
          ))}
        </Picker>

        <Text style={styles.text}>John</Text>
        <Text style={styles.text}>Emma</Text>
        <Text style={styles.text}>Michael</Text>
        <Text style={styles.text}>Sophia</Text>
        <Text style={styles.text}>William</Text>
        <Text style={styles.text}>Olivia</Text>
        <Text style={styles.text}>James</Text>
        <Text style={styles.text}>Liam</Text>
        <Text style={styles.text}>Ava</Text>
        <Text style={styles.text}>Benjamin</Text>
        <Text style={styles.text}>Mia</Text>
        <Text style={styles.text}>Lucas</Text>
        <Text style={styles.text}>Charlotte</Text>
        <Text style={styles.text}>Alexander</Text>
        <Text style={styles.text}>Amelia</Text>
        <Text style={styles.text}>Henry</Text>
        <Text style={styles.text}>Harper</Text>
        <Text style={styles.text}>Daniel</Text>
        <Text style={styles.text}>Evelyn</Text>
      </ScrollView>

      <View style={styles.buttonBottomContainer}>
        <Button title="Change System" color="#03312E" style={styles.button} onPress={() => navigation.goBack()} />
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
    marginVertical: 5,
    marginHorizontal: 10,
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
    backgroundColor: '#009F93',
    padding: 5,
    borderRadius: 10,
    position: 'absolute',
    bottom: 100,
  },
  button: {
    backgroundColor: '#009F93',
    borderColor: '#03312E',
    padding: 15,
    textAlign: 'center',
    borderRadius: 5,
    width: '30%',
  },
  picker: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#03312E',
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: '#009F93',
  },
  buttonContainer: {
    width: 100,
    height: 40,
    backgroundColor: '#009F93',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});


