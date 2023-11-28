
import React from 'react';
import { View, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    // Handle login logic here
    navigation.navigate('Home'); // Direct to Home screen
  };

  const handleRegister = () => {
    // Handle register logic here
  };

  return (
    <View>
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

