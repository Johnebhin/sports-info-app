import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground source={require('../assets/10716224.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Sports Info App!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Adjust text color as needed for visibility
  },
});
