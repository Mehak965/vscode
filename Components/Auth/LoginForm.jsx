import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Switch, Modal, FlatList, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Ionicons } from '@expo/vector-icons';
const LoginForm = () => {
 
    
    const [password, setPassword] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [showPassword, setShowPassword] = useState(false);
    

    const navigation = useNavigation();
   


    const handleSubmit = () => {
        console.log('Form Submitted');
        console.log('Name:', password);
        console.log('Email:', email);
        navigation.navigate('verify');
   
    };

    return (
        <View style={styles.container}>
            <View style={styles.statusBar}>
                <TouchableOpacity>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>
                    Sign in with your email or {'\n'}
                    phone number
                </Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail} // Update name state
                />
              <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input2}
                        placeholder="Enter Your Password"
                        placeholderTextColor="#999"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword} // Toggle password visibility
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Ionicons
                            name={showPassword ? 'eye-off' : 'eye'}
                            size={24}
                            color="#999"
                        />
                    </TouchableOpacity>
                </View>
              

          

                <TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
                    <Text style={styles.signupButtonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.orText}>or</Text>
                    <View style={styles.divider} />
                </View>

                <TouchableOpacity style={styles.socialButton}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }}
                        style={styles.socialIcon}
                    />
                    <Text style={styles.socialButtonText}>Sign up with Gmail</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/fluency/48/000000/facebook-new.png' }}
                        style={styles.socialIcon}
                    />
                    <Text style={styles.socialButtonText}>Sign up with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/mac-os.png' }}
                        style={styles.socialIcon}
                    />
                    <Text style={styles.socialButtonText}>Sign up with Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signInContainer} onPress={()=>{
                    navigation.navigate('registration')
                }}>
                    <Text style={styles.signInText}>
                        Already have an account? <Text style={styles.signInLink}>Sign up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    statusBar: {
        width: '100%',
        height: 94,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
    },
    backText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    signupContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        marginTop: 5,
    },
    signupText: {
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 30,
    },
    form: {
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        height: 54,
        marginBottom: 15,
    },
    input2: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    eyeIcon: {
        padding: 5,
    },
    input: {
        width: '100%',
        height: 54,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    phoneInput: {
        flex: 1,
    },
    dropdown: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        height: 54,
    },
    dropdownText: {
        fontSize: 16,
        color: '#999',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
    },
    optionContainer: {
        width: '100%',
    },
    option: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionText: {
        fontSize: 16,
        color: '#000',
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    termsText: {
        marginLeft: 10,
        fontSize: 14,
        color: '#666',
    },
    linkText: {
        color: '#008955',
        textDecorationLine: 'underline',
    },
    signupButton: {
        width: '100%',
        height: 54,
        backgroundColor: '#008955',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    signupButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    orText: {
        marginHorizontal: 10,
        fontSize: 14,
        color: '#666',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Center the contents horizontally
        marginBottom: 15,
        padding: 20,
        backgroundColor: '#fff', // Make sure background color is white
        borderColor: '#f0f0f0',  // Set the border color
        borderWidth: 1,          // Add border width to make the border visible
        borderRadius: 8,
    },
    socialIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    socialButtonText: {
        fontSize: 16,
        color: '#666',
    },
    signInContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInText: {
        fontSize: 14,
        color: '#666',
    },
    signInLink: {
        color: '#008955',
        fontWeight: 'bold',
    },
});
