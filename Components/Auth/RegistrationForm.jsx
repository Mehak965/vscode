import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Switch, Modal, FlatList, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
const RegistrationForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState(''); // State for name
    const [email, setEmail] = useState(''); // State for email
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedGender, setSelectedGender] = useState('Select Gender');
    const [fadeAnim] = useState(new Animated.Value(0));
    const navigation = useNavigation();
     // Initial opacity value for fade-in

    const genderOptions = ['Male', 'Female'];

    useEffect(() => {
        if (modalVisible) {
            // Fade-in effect for modal content
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }).start();
        } else {
            // Reset opacity when modal is closed
            fadeAnim.setValue(0);
        }
    }, [modalVisible]);

    const handleSubmit = () => {
        console.log('Form Submitted');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        console.log('Selected Gender:', selectedGender);
        console.log('Terms Accepted:', isChecked);
        navigation.navigate('verify');
        // Add logic to handle form submission (e.g., API call) here
    };

    return (
        <View style={styles.container}>
            <View style={styles.statusBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>
                    Sign up with your email or {'\n'}
                    phone number
                </Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#999"
                    value={name}
                    onChangeText={setName} // Update name state
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail} // Update email state
                />
                <View style={styles.phoneInputContainer}>
                    <TextInput
                        style={[styles.input, styles.phoneInput]}
                        placeholder="+92 Your mobile number"
                        placeholderTextColor="#999"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber} // Update phoneNumber state
                    />
                </View>
                <TouchableOpacity 
                    style={[styles.input, styles.dropdown]} 
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.dropdownText}>{selectedGender}</Text>
                </TouchableOpacity>
                
                {/* Gender Dropdown Modal */}
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Animated.View style={{ ...styles.optionContainer, opacity: fadeAnim }}>
                                <FlatList
                                    data={genderOptions}
                                    keyExtractor={(item) => item}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity 
                                            style={styles.option}
                                            onPress={() => {
                                                setSelectedGender(item);
                                                setModalVisible(false);
                                            }}
                                        >
                                            <Text style={styles.optionText}>{item}</Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            </Animated.View>
                        </View>
                    </View>
                </Modal>

                <View style={styles.termsContainer}>
                    <Switch
                        value={isChecked}
                        onValueChange={(value) => setIsChecked(value)}
                        thumbColor={isChecked ? '#008955' : '#f4f3f4'}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                    />
                    <Text style={styles.termsText}>
                        By signing up, you agree to the <Text style={styles.linkText}>Terms of service
                             {'\n'}</Text> and <Text style={styles.linkText}>Privacy policy</Text>.
                    </Text>
                </View>

                <TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
                    <Text style={styles.signupButtonText}>Sign Up</Text>
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
                    navigation.navigate('login')
                }}>
                    <Text style={styles.signInText}>
                        Already have an account? <Text style={styles.signInLink}>Sign in</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegistrationForm;

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
