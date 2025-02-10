import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./../screens/SplashScreen.js";
import LoginScreen from "./../screens/LoginScreen.js";
import HomeScreen from "./../screens/HomeScreen.js";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigator;
