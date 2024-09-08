import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import BG from '../../assets/Images/third.png';
import Button from '../../assets/Images/firstB.png';
import { useNavigation } from '@react-navigation/native'; 

const ThirdBoarding = () => {
    const navigation = useNavigation(); 
    const handleNavigate=()=>{
        return  navigation.reset({
            index: 0,
            routes: [{ name: 'WelcomeScreen' }], // Ensure 'OnboardingScreen' matches your navigation configuration
          });
    }
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={BG} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Book your car</Text>
        <Text style={styles.subtitle}>
          Sell houses easily with the help of Listenoryx{'\n'}
          and to make this line big{'\n'}
          I am writing more.
        </Text>
      </View>
      <View style={styles.nextButton}>
        <TouchableOpacity onPress={handleNavigate}>
          <Image source={Button} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThirdBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    width: '100%',
    height: 94,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  skipText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 61,
  },
  image: {
    width: 373,
    height: 208,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  nextButton: {
    alignItems: 'center',
    marginTop: 20, // Space between the text and the button
    marginBottom: 20, // Optional: Space from the bottom of the container
  },
  buttonImage: {
    width: 86,
    height: 86,
    marginTop:176,
    resizeMode: 'contain', // Adjusts the image to fit within the given dimensions
  },
});
