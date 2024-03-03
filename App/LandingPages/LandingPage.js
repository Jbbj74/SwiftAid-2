import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

const LandingPage = ({ navigation }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { width, height } = Dimensions.get("screen");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        //borderColor: "red",
        //borderWidth: 2,
      }}
    >
      <Text>Lading Page</Text>
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
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderColor: "blue",
          borderWidth: 2,
          height: 290,
          paddingBottom: 50,
          width: "90%",
        }}
      >
        <View
          style={{
            height: 200,
            width: 200,
            justifyContent: "center",
            alignItems: "center",
            // borderColor: "red",
            //borderWidth: 2,
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
                fontSize: 18,
                backgroundColor: "white",
              }}
            >
              SwiftAid
            </Text>
          </View>
        </View>

        <Text
          style={{
            borderColor: "red",
            borderWidth: 2,
            fontSize: 13,
            textAlign: "center",
            color: "#6F6B6B",
          }}
        >
          Before Creating ann Account please select wheather you are a First
          Aider or a Civillian
        </Text>
      </View>
      <View
        style={{
          //borderColor: "red",
          //borderWidth: 1,
          height: 200,
          width: "85%",
          flexDirection: "column",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={[styles.button, isPressed && styles.buttonPressed]}
          activeOpacity={0.6}
          onPress={() => {
            setIsPressed(!isPressed);
            navigation.navigate("CivillianForm");
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Civillian</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
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
          }}
          onPress={() => {
            navigation.navigate("FirstAiderForm");
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>First Aider</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  button: {
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
  buttonPressed: {
    backgroundColor: "#19719E",
  },
});
