import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          value={isDarkModeEnabled}
          onValueChange={toggleDarkMode}
        />
      </View>
      <Text style={styles.textLine}>Text Line 1</Text>
      <Text style={styles.textLine}>Text Line 2</Text>
      <Text style={styles.textLine}>Text Line 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  settingText: {
    fontSize: 16,
  },
  textLine: {
    fontSize: 16,
    marginBottom: 8,
  },
});
