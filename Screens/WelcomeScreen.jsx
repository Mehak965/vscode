import React from 'react';
import { Image, View, StyleSheet, Dimensions, Text } from 'react-native';
import BG from '../assets/Images/Welcome-Screen.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; 

const { width } = Dimensions.get('window'); // Get screen width

const WelcomeScreen = () => {
    const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={BG} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
        Have a better sharing experience
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.primaryButton} onPress={()=>{
            navigation.navigate('registration')
        }}>
          <Text style={styles.buttonText1}>Create an Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.buttonText2}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column', // Ensure children are stacked vertically
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100, // Adjust as needed
  },
  image: {
    width: width * 0.9,
    height: (width * 0.9) * (276 / 356.5),
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20, // Add margin at the bottom if needed
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
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  primaryButton: {
    width: 340,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008955', // Primary color
    borderRadius: 8,
    marginBottom: 10,
  
  },
  secondaryButton: {
    width: 340,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#008955', // Border color
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#008955',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
