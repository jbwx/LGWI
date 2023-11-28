import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ViewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}></View>
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
    width: '66.67%',
    aspectRatio: 1,
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
  },
});

