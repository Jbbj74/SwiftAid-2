import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Maps from "../../Screens/Maps";
import Alert from "../../Screens/Alert";
import Contacts from "../../Screens/Contacts";
import Svg, { Path } from "react-native-svg";

const path =
  "M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Maps"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="map" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Alert"
        component={Alert}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Svg
              width={30}
              height={30}
              viewBox="0 0 24 24"
              fill={color} // Fill the SVG icon with provided color
            >
              {/* Use Path component to define the path of your SVG icon */}
              <Path d={path} />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="contacts" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
