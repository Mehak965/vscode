import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../../Screens/OnboardingScreen';
import SplashScreen from '../../Screens/SplashScreen';
import WelcomeScreen from '../../Screens/WelcomeScreen';
import Registration from '../../Screens/Auth/Registration';
import Verify from '../../Screens/Auth/Verify';

const Stack = createStackNavigator();

export default function AppLayout() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="splashScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                    name="splashScreen" 
                    component={SplashScreen} 
                  
                />
                <Stack.Screen 
                    name="Onboarding" 
                    component={OnboardingScreen} 
                  
                />

                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="registration" component={Registration} />
                <Stack.Screen name="verify" component={Verify} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
