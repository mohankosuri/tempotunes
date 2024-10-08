import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const Splashscreen = () => {
  const navigator: any = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigator.navigate('home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
       

      {/* Title at the top */}
      <Text style={styles.title}>TempoTune</Text>

      {/* Lottie animation */}
      <LottieView
        source={require('../assets/music.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40, // Adjust the size to fit better
    color: '#7F265B',
    fontWeight: '700',
    marginBottom: 20, // Add some space between title and animation
    textAlign: 'center', // Center the text
  },
  lottie: {
    width: 300, // Adjust the width if needed
    height: 300, // Adjust the height
  },
});
