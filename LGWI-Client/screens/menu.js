
// Import necessary modules
import React from 'react';
import { View, Text, Button } from 'react-native';

// Define the MenuScreen component
export default function MenuScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Menu Screen!</Text>
      <Button title="Option 1" onPress={() => console.log('Option 1 selected')} />
      <Button title="Option 2" onPress={() => console.log('Option 2 selected')} />
      <Button title="Option 3" onPress={() => console.log('Option 3 selected')} />
    </View>
  );
};
