import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './Screens/OnboardingScreen';
import HomeScreen from './Screens/Home'; // This would be your main app screen

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding">
                <Stack.Screen 
                    name="Onboarding" 
                    component={OnboardingScreen} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
