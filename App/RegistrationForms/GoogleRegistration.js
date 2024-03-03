import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Dimensions,
} from "react-native";

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from "expo-auth-session/providers/google";
const GoogleRegistration = ({ navigation }) => {
  const { width, height } = Dimensions.get("screen");
  const [isPressed, setIsPressed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [useInfo, setUserInfo] = React.useState(null);
  const [request, reponse, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "711773219212-k11d5u1q8np8ak0uc4201j74me2uit4o.apps.googleusercontent.com",
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderColor: "red",
        borderWidth: 2,
      }}
    >
      <Image
        source={require("../Images/Swift BAckground.png")}
        style={{ width: width, height: 300, position: "absolute", bottom: -50 }}
        resizeMode="contain" // Adjust the image size to fit within its container
      />
      <Image
        source={require("../Images/Swift BAckgroundH.png")}
        style={{
          width: width,
          height: 300,
          position: "absolute",
          top: -50,
          transform: [{ scaleY: 1 }],
        }}
        resizeMode="contain" // Adjust the image size to fit within its container
      />
      <Text>Google registration</Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 200,
          paddingVertical: 0,
          width: "90%",
        }}
      >
        <View
          style={{
            height: "50%",
            width: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../Images/Swift.png")}
            style={{ width: 140, height: 140 }}
            resizeMode="contain" // Adjust the image size to fit within its container
          />
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 2,
              shadowRadius: 2,
              elevation: 5, // For Android
              //borderColor: "red",
              //borderWidth: 2,
            }}
          >
            <Text
              style={{
                //borderColor: "red",

                color: "#9E3838",
                fontFamily: "Roboto",
                fontWeight: "bold",
                letterSpacing: 3,
                fontSize: 22,
                backgroundColor: "white",
              }}
            >
              Swift Aid
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.textInputContainer}>
        <View
          style={{
            borderColor: "grey",
            height: "80%",
            width: "80%",
            borderWidth: 3,
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 5,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
            shadowRadius: 1,
            elevation: -5,
            paddingLeft: 10,
          }}
        >
          <Text style={{ fontSize: 15 }}>+63</Text>
          <TextInput
            placeholder="Mobile Number"
            keyboardType="numeric"
            style={{
              //borderColor: "green",
              //borderWidth: 2,
              height: "100%",
              width: "100%",
              borderRadius: 10,
              marginLeft: 8,
              fontSize: 15,
            }}
          ></TextInput>
        </View>
      </View>
      <View style={styles.txtInputRBtntxtContainer}>
        <View style={styles.raddioBtnTextContainer}>
          <RadioButton
            style={{ height: 5, borderRadius: 0 }}
            value="single"
            status={checked ? "checked" : "unchecked"}
            onPress={() => setChecked(!checked)}
          />
          <Text
            style={{
              //borderColor: "red",
              //borderWidth: 1,
              fontSize: 10,
              textAlign: "left",
              color: "#6F6B6B",
            }}
          >
            I have Read and Accepted the Privacy Agreement and Service Agreement
          </Text>
        </View>
      </View>
      <View style={styles.ButtonsContainer}>
        <TouchableOpacity
          style={[styles.civillianButton, isPressed && styles.buttonPressed]}
          activeOpacity={0.6}
          onPress={() => {
            setIsPressed(!isPressed);
            navigation.navigate("TabNavigation");
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Let's go</Text>
        </TouchableOpacity>
        <View
          style={{
            // borderColor: "red",
            //borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.divider} />
          <Text>or</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.googleFacebookContainer}>
          <TouchableOpacity onPress={() => promptAsync()}>
            <Image
              source={require("../Images/icons8-google-50.png")}
              style={styles.googleIcon}
            />
          </TouchableOpacity>

          <Image
            source={require("../Images/icons8-google-50.png")}
            style={styles.googleFaceBook}
            onPress={() => promptAsync()}
          />
        </View>
      </View>
    </View>
  );
};

export default GoogleRegistration;

const styles = StyleSheet.create({
  civillianButton: {
    backgroundColor: "grey",
    width: "100%",
    borderRadius: 5,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginbottom: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10,
  },
  firstAiderButton: {
    backgroundColor: "#9E3838",
    width: "100%",
    borderRadius: 5,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10,
  },
  buttonPressed: {
    backgroundColor: "#19719E",
  },
  ButtonsContainer: {
    //borderColor: "red",
    //borderWidth: 1,
    height: 200,
    width: "85%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  raddioBtnTextContainer: {
    flex: 1,
    flexDirection: "row",
    // borderColor: "yellow",
    // borderWidth: 1,
    with: "60%",
  },
  txtInputRBtntxtContainer: {
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "blue",
    height: 40,
    width: "90%",
  },
  textInputContainer: {
    justifyContent: "center",
    height: 70,
    margin: 10,
    borderRadius: 10,
    fontSize: 18,

    // borderColor: "black",
    //borderWidth: 2,
  },
  divider: {
    flex: 1,
    with: 100,
    height: 20,
    backgroundColor: "lightgrey",
    height: 4,
    borderRadius: 9,
  },
  googleFacebookContainer: {
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-evenly",
    height: 50,
    width: "100%",

    //backgroundColor: "grey",
  },
});
