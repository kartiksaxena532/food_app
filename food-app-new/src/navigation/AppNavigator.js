import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcomescreen from "../screens/Welcomescreen";
import RecipeList from "../screens/RecipeList";
//import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Welcome" component={Welcomescreen} />
				<Stack.Screen name="Recipe" component={RecipeList} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
< stack navigator></stack>
export default AppNavigator;

const styles = StyleSheet.create({});
