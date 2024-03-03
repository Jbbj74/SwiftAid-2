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
import { Icon, RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from "expo-auth-session/providers/google";

const FirstAiderForm = ({ navigation }) => {
  const { width, height } = Dimensions.get("screen");
  const [isPressed, setIsPressed] = useState(false);
  const [fText, setFText] = useState("");
  const [mText, setMText] = useState("");
  const [lText, setLText] = useState("");

  const [lastNameError, setLastNameError] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [textInputFocused, setTextInputFocused] = useState(false);

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
      <Text>FirstAiderForm Form</Text>
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
        <Text style={styles.inputTextText}>Last Name</Text>
        <TextInput
          value={lText}
          onChangeText={lastNameHandleChangeText}
          placeholder="Enter Your lastname here"
          style={styles.textInput}

          //keyboardType="numeric"
        ></TextInput>
        {lastNameError ? (
          <Text style={styles.error}>{lastNameError}</Text>
        ) : null}
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

      <View style={styles.textInfoBody}>
        <Text style={styles.textInfo}>
          Please Attached some Id picture or certification as proof that you are
          a professional or volunteer first aider.
        </Text>
      </View>
      <View style={styles.insertImageContainer}>
        <Button title="Insert Image" />
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

export default FirstAiderForm;

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

  textInputContainer: {
    justifyContent: "center",
    width: "100%",
    height: 210,
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
    marginLeft: 200,
  },
  dropdown: {
    width: 200,
    height: "100%",
    color: "grey",
    overflow: "hidden",
    paddingRight: 30,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    color: "black",
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
  textInfoBody: {
    borderBlockColor: "red",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 20,
    margin: 15,
  },
  textInfo: {
    fontSize: 14.5,
    textAlign: "left",
    color: "grey",
  },
  insertImageContainer: {
    height: 90,
    width: "100%",
    backgroundColor: "grey",
  },
});
