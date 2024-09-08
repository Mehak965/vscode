import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    Pressable,
    Modal,
    Dimensions,
    TouchableOpacity,
  } from "react-native";
import Logo from "../assets/loginbg.png";
import OTPBG from "../assets/otpbg.png";

const LoginScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [verificationId, setVerificationId] = useState("123456"); // Simulated verification ID
    const [verificationCode, setVerificationCode] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState(null);

    const handleGetOTP = () => {
        // Simulate sending an OTP
        if (phoneNumber) {
            setModalVisible(true);
            setMessage(null); // Clear any previous messages
        } else {
            setMessage({ text: "Please enter a valid phone number", color: "red" });
        }
    };

    const handleVerifyOTP = () => {
        // Simulate OTP verification
        if (verificationCode === verificationId) {
            setMessage({ text: "OTP verified successfully!", color: "green" });
            setModalVisible(false);
        } else {
            setMessage({ text: "Invalid OTP. Please try again.", color: "red" });
        }
    };

    return (
        <View style={styles.container}>
            <Image source={Logo} style={{ width: 300, height: 300, marginTop: 20 }} />

            <View style={styles.phoneInputContainer}>
                <Text style={styles.label}>Enter phone number</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Phone number"
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                    value={phoneNumber}
                />
                <Pressable onPress={handleGetOTP}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Get OTP</Text>
                    </View>
                </Pressable>
            </View>

            <Modal animationType="slide" visible={modalVisible}>
                <View style={styles.container}>
                    <View style={styles.modalContent}>
                        <Pressable onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeText}>Close</Text>
                        </Pressable>
                        <Text style={styles.modalTitle}>Enter OTP code</Text>
                        <Image source={OTPBG} style={styles.otpImage} />
                        <Text style={styles.modalSubText}>
                            We have sent a verification code to your mobile
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="123456"
                            onChangeText={setVerificationCode}
                            keyboardType="number-pad"
                            maxLength={6}
                        />
                        <Pressable onPress={handleVerifyOTP}>
                            <View style={styles.button2}>
                                <Text style={styles.buttonText2}>Submit</Text>
                            </View>
                        </Pressable>
                        {message && (
                            <TouchableOpacity
                                style={styles.messageContainer}
                                onPress={() => setMessage(null)}
                            >
                                <Text style={[styles.messageText, { color: message.color }]}>
                                    {message.text}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const android = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    phoneInputContainer: {
        flex: 1,
        backgroundColor: "#2153CC",
        width: android.width,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 50,
    },
    label: {
        marginTop: 40,
        marginLeft: 10,
        marginBottom: 10,
        color: "#ffff",
        fontSize: 18,
        fontWeight: "bold",
    },
    textInput: {
        width: android.width * 0.94,
        height: 60,
        borderRadius: 20,
        borderColor: "#fff",
        borderWidth: 1,
        marginHorizontal: 10,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        color: "#000",
        fontSize: 18,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
        marginTop: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        width: android.width * 0.94,
        borderRadius: 20,
    },
    buttonText: {
        color: "#2153CC",
        fontWeight: "bold",
    },
    modalContent: {
        flex: 1,
        alignItems: "center",
        marginTop: 50,
    },
    closeText: {
        color: "red",
        marginBottom: 10,
    },
    modalTitle: {
        color: "#fff",
        fontSize: 36,
        fontWeight: "bold",
        backgroundColor: "#2153CC",
        padding: 15,
        borderRadius: 15,
        textAlign: "center",
    },
    otpImage: {
        width: 250,
        height: 250,
        marginTop: 10,
    },
    modalSubText: {
        color: "#2153CC",
        fontWeight: "bold",
        fontSize: 12,
        marginTop: 10,
    },
    input: {
        marginTop: 50,
        width: android.width * 0.94,
        height: 60,
        borderRadius: 20,
        borderColor: "#000fff",
        textAlign: "center",
        backgroundColor: "#000fff32",
        color: "#fff",
        fontSize: 20,
        padding: 10,
    },
    button2: {
        alignItems: "center",
        backgroundColor: "rgba(6,66,136,1)",
        padding: 15,
        marginTop: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        width: android.width * 0.94,
        borderRadius: 20,
    },
    buttonText2: {
        color: "#fff",
        fontWeight: "bold",
    },
    messageContainer: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
    },
    messageText: {
        fontSize: 17,
        textAlign: "center",
    },
});

export default LoginScreen;
