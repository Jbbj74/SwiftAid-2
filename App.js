import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./App/Navigators/TabNavigations/TabNavigation";
import LandingPage from "./App/LandingPages/LandingPage";
import CivillianForm from "./App/CivillianForms/CivillianForm";
import { useState } from "react";
import GoogleRegistration from "./App/RegistrationForms/GoogleRegistration";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FirstAiderForm from "./App/FirstAiderForms/FirstAiderForm";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GoogleRegistration"
          component={GoogleRegistration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CivillianForm"
          component={CivillianForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FirstAiderForm"
          component={FirstAiderForm}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
