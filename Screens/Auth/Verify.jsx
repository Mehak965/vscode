import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Verify = () => {
    const navigation = useNavigation(); 
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (value, index) => {
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input field automatically
    if (value && index < otp.length - 1) {
      const nextInput = index + 1;
      const nextInputRef = document.getElementById(`otp-input-${nextInput}`);
      if (nextInputRef) {
        nextInputRef.focus();
      }
    }
  };

  const handleVerify = () => {
    
    const otpCode = otp.join('');
    console.log('OTP Code:', otpCode);
    navigation.navigate('setPassword')
   
  };

  return (
    <View style={styles.container}>

     <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      
      <View style={styles.verifyText}>
        <Text style={styles.title}>Phone Verification</Text>
        <Text style={styles.subtitle}>Enter your OTP code</Text>
      </View>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            // Assign an ID for the input to focus the next input field
            id={`otp-input-${index}`}
          />
        ))}
      </View>

      <TouchableOpacity>
        <Text style={styles.resendText}>Didn't receive code? <Text style={styles.resendLink}>Resend again</Text></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
  },
  backText: {
    color: 'black',
    fontSize: 16,
  },
  verifyText: {
    flexDirection: 'column', // Equivalent to flex-direction: column
    justifyContent: 'center', // Center items vertically
    marginTop: "35%",
    gap: 12, // Add space between items
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 60,
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
  },
  resendText: {
    color: '#888',
    textAlign: 'center',
    marginTop: 30,
  },
  resendLink: {
    color: '#008955',
  },
  verifyButton: {
    backgroundColor: '#008955',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "20%",
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Verify;
