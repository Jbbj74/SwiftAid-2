import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
  touchablewi,
  Keyboard,
  TextComponent,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from "expo-auth-session/providers/google";

const GoogleRegistration = ({ navigation }) => {
  const { width, height } = Dimensions.get("screen");
  const [isPressed, setIsPressed] = useState(false);
  const [fText, setFText] = useState("");
  const [mText, setMText] = useState("");
  const [lText, setLText] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [middleNameError, setMiddleNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [textInputFocused, setTextInputFocused] = useState(false);

  const firstNameHandleChangeText = (inputText) => {
    // Ensure that the input text contains only letters
    if (/^[a-zA-Z]*$/.test(inputText) || inputText === "") {
      setFText(inputText);
      setFirstNameError("");
    } else {
      // Show an alert when the input contains numbers
      //Alert.alert("Invalid Input", "Please enter only letters.");
      setFirstNameError("Please insert Letters Only.");
    }
  };

  const middleNameHandleChangeText = (inputText) => {
    // Ensure that the input text contains only letters
    if (/^[a-zA-Z]*$/.test(inputText) || inputText === "") {
      setMText(inputText);
      setMiddleNameError("");
    } else {
      // Show an alert when the input contains numbers
      //Alert.alert("Invalid Input", "Please enter only letters.");
      setMiddleNameError("Please insert Letters Only.");
    }
  };

  const lastNameHandleChangeText = (inputText) => {
    // Ensure that the input text contains only letters
    if (/^[a-zA-Z]*$/.test(inputText) || inputText === "") {
      setLText(inputText);
      setLastNameError("");
    } else {
      // Show an alert when the input contains numbers
      //Alert.alert("Invalid Input", "Please enter only letters.");
      setLastNameError("Please insert Letters Only.");
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderColor: "red",
        borderWidth: 2,
        margin: 0,
        padidng: 0,
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
      <Text>Civilian Form</Text>

      <View // Swift logo and Swift text container
        style={{
          height: 190,
          width: 200,
          justifyContent: "space-around",
          alignItems: "center",
          borderColor: "red",
          borderWidth: 1,
          overflow: "hidden",
        }}
      >
        <Image
          source={require("../Images/Swift.png")}
          style={{
            width: 120,
            height: 120,
            borderColor: "red",
            borderWidth: 1,
          }}
          resizeMode="contain" // Adjust the image size to fit within its container
        />
        <View // swift text shadow
          style={
            {
              //borderColor: "red",
              //borderWidth: 2,
            }
          }
        >
          <Text
            style={{
              color: "#9E3838",
              fontFamily: "Roboto",
              fontWeight: "bold",
              letterSpacing: 3,
              fontSize: 20,
              backgroundColor: "white",
            }}
          >
            Swift Aid
          </Text>
        </View>
        <Text
          style={{
            borderColor: "black",
            color: "black",
            fontFamily: "Roboto",
            letterSpacing: 3,
            fontSize: 22,
            backgroundColor: "white",
            paddingTop: 10,
          }}
        >
          Register
        </Text>
      </View>

      <View style={styles.textInputContainer}>
        <Text style={styles.inputTextText}>First Name</Text>
        <TextInput
          value={fText}
          onChangeText={firstNameHandleChangeText}
          placeholder="Enter Your firstname here"
          style={styles.textInput}

          //keyboardType="numeric"
        ></TextInput>
        <View style={styles.errorContainer}>
          {firstNameError ? (
            <Text style={styles.error}>{firstNameError}</Text>
          ) : null}
        </View>
        <Text style={styles.inputTextText}>Middle Name</Text>
        <TextInput
          value={mText}
          onChangeText={middleNameHandleChangeText}
          placeholder="Enter Your Middle Name here"
          //keyboardType="numeric"
          style={styles.textInput}
        ></TextInput>
        <View style={styles.errorMLContainer}>
          {middleNameError ? (
            <Text style={styles.error}>{middleNameError}</Text>
          ) : null}
        </View>
        <Text style={styles.inputTextText}>Last Name</Text>
        <TextInput
          value={lText}
          onChangeText={lastNameHandleChangeText}
          placeholder="Enter Your Last Name here"
          //keyboardType="numeric"
          style={styles.textInput}
        ></TextInput>
        <View style={styles.errorLNContainer}>
          {lastNameError ? (
            <Text style={styles.error}>{lastNameError}</Text>
          ) : null}
        </View>

        <Text style={styles.inputTextText}>Gender</Text>
        <View style={styles.pickerContianer}>
          <Picker
            selectedValue={selectedGender}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedGender(itemValue)
            }
            style={styles.dropdown}
          >
            <Picker.Item label="Select Gender..." value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Non Binary" value="Non Binary" />
            <Picker.Item label="Them" value="Them" />
            <Picker.Item label="Genderfluid" value="Genderfluid" />
            <Picker.Item label="Agender" value="Agender" />
            <Picker.Item label="Bigender" value="Bigender" />
            <Picker.Item label="Pangender" value="Pangender" />
          </Picker>
        </View>
        <Text style={styles.inputTextText}>Email </Text>
        <TextInput
          placeholder="Mobile Number"
          style={styles.textInput}
          //keyboardType="numeric"
        ></TextInput>
      </View>

      <View style={styles.ButtonsContainer}>
        <TouchableOpacity
          style={[styles.ConfirmButton, isPressed && styles.buttonPressed]}
          activeOpacity={0.6}
          onPress={() => {
            setIsPressed(!isPressed);
            navigation.navigate("GoogleRegistration");
          }}
        >
          <Image
            style={{ height: 20, width: 40 }}
            source={require("../Images/icons8-arrow-50.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoogleRegistration;

const styles = StyleSheet.create({
  ConfirmButton: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkred",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10,
  },

  buttonPressed: {
    backgroundColor: "red",
  },
  ButtonsContainer: {
    borderColor: "red",
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 10,
    overflow: "hidden",
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
    width: "100%",
    height: 350,
    paddingHorizontal: 16,
    borderColor: "red",
    borderWidth: 2,
  },
  textInput: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "grey",
    borderWidth: 2,
    height: 38,
    width: "100%",
    borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 15,
    color: "black",
    backgroundColor: "white",
  },
  inputTextText: {
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 10,
    color: "grey",
  },
  error: {
    color: "red",
    fontSize: 10.3,
  },
  errorContainer: {
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: 15,
    width: 150,
    //borderWidth: 1,
    // borderColor: "green",
    top: 68,
    right: 0,
  },
  errorLNContainer: {
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    height: 15,
    width: 150,
    // borderWidth: 1,
    // borderColor: "green",
    top: 207,
    right: 0,
  },
  errorMLContainer: {
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    height: 15,
    width: 150,
    // borderWidth: 1,
    //borderColor: "green",
    top: 138,
    right: 0,
  },
  dropdown: {
    width: 200,
    height: "100%",
    color: "grey",
    overflow: "hidden",
  },
  pickerContianer: {
    justifyContent: "center",
    borderColor: "grey",
    borderWidth: 2,
    height: 38,
    width: "100%",
    borderRadius: 5,
    fontSize: 15,
  },
});
