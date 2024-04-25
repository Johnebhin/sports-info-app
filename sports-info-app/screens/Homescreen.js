import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar, ImageBackground, Image, SafeAreaView } from 'react-native'; // Import SafeAreaView here

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} /> {/* Use SafeAreaView here */}
      <ImageBackground
        source={require('../assets/WelcomeBg.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Sports Info</Text>
        </View>
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => navigation.navigate('Football')}>
          <Text style={styles.routeText}>Football</Text>
          <Text style={styles.knowMore}>{'Know More --->'}</Text>
          <Text style={styles.bgDigit}>1</Text>
          <Image
            source={require('../assets/football.png')}
            style={styles.iconImage}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => navigation.navigate('Cricket')}>
          <Text style={styles.routeText}>Cricket</Text>
          <Text style={styles.knowMore}>{'Know More --->'}</Text>
          <Text style={styles.bgDigit}>2</Text>
          <Image
            source={require('../assets/cricket.png')}
            style={styles.iconImage}></Image>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  backgroundImage: {
    flex: 5,
    resizeMode: 'cover',
    marginRight: -20,
    marginLeft: -20
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    borderRadius: 40,
    backgroundColor: 'white'
  },
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white"
  },
  routeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginTop: 5,
    paddingLeft: 30
  },
  knowMore: {
    paddingLeft: 30,
    color: "red",
    fontSize: 15
  },
  bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 0.5)",
    fontSize: 150,
    right: -5,
    bottom: -15,
    zIndex: -1
  },
  iconImage: {
    position: "absolute",
    height: 330,
    width: 50,
    resizeMode: "contain",
    right: 60,
    top: -70
  }
});
