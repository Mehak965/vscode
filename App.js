import React from "react";



import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();




import DrawerNavigator from "./components/DrawNavigator";



const App =()=>{
	
	return (
	
		
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		
	);
}


export default App