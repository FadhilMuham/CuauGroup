import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "../Pages/LoginScreen";
import AboutScreen from "../Pages/AboutScreen";
import HomeScreen from "../Pages/HomeScreen";
import ProjectScreen from "../Pages/ProjectScreen";
import SettingScreen from "../Pages/SettingScreen";
import SkillProject from "../Pages/SkillProjectScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Pages/HomeScreen";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      	<Stack.Navigator>
			      <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Project" component={ProjectScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="Skill" component={SkillProject} />
      	</Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router

const styles = StyleSheet.create({

});
