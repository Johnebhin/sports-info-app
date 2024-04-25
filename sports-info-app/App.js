import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

export default function HomeScreen() {
  const navigation = useNavigation(); // Initialize navigation object

  const handleStartButtonPress = () => {
    navigation.navigate('Football'); // Navigate to the FootballScreen
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to Sports Info App</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleStartButtonPress}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
