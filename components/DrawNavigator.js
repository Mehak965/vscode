import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import HomeNavigator from './HomeNavigator';
import { MainStackNavigator } from "./MainStackNavigator";
import Profile from "./Setting";
import DigitalWallet from "./DigitalWallet";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-tsScYuvKuNwGFpFEBQhBft-FZBhzRww",
    authDomain: "carsharing2-d254d.firebaseapp.com",
    projectId: "carsharing2-d254d",
    storageBucket: "carsharing2-d254d.appspot.com",
    messagingSenderId: "450530782923",
    appId: "1:450530782923:web:43786c1b9a42666e40b54e",
    measurementId: "G-VVEWZZGFBT",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = getDatabase(app);

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{props.name}</Text>
    </View>
);

const DrawerNavigator = () => {
    const navigation = useNavigation();

    const clear = async () => {
        await SecureStore.deleteItemAsync("PhoneNum");
        navigation.navigate("Login");
    };

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                name="Home"
                options={{ headerShown: false }}
                component={MainStackNavigator}
            />
            <Drawer.Screen
                name="DigitalWallet"
                options={{ headerShown: true }}
                component={DigitalWallet}
            />
            <Drawer.Screen
                name="Setting"
                options={{ headerShown: true }}
                component={Profile}
            />
            <Drawer.Screen name="Sign Out">
                {() => {
                    clear();
                    return <View />; // Render an empty view or some placeholder
                }}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
