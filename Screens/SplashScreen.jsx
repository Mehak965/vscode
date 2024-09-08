import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Logo from '../assets/Images/logo.png';
import slogan from '../assets/Images/slogan.png';

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation(); 

  useEffect(() => {

    const timer = setTimeout(() => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Onboarding' }], // Ensure 'OnboardingScreen' matches your navigation configuration
          });
    }, 3000); 
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.sloganContainer}>
        <Image source={slogan} style={styles.slogan} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color
  },
  logoContainer: {
    position: 'absolute',
    top: height * 0.1, // Position the logo 10% from the top
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: width * 0.8, // Width relative to screen width
    height: (width * 0.8) * (267 / 393), // Maintain aspect ratio
    resizeMode: 'contain', // Ensures the image is scaled properly
  },
  sloganContainer: {
    position: 'absolute',
    bottom: height * 0.2, // Position the slogan 20% from the bottom
    alignItems: 'center',
  },
  slogan: {
    resizeMode: 'contain', // Ensures the image is scaled properly
  },
});

export default SplashScreen;
