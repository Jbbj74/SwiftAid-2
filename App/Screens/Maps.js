import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

import React from "react";

const Maps = () => {
  return (
    <View style={styles.container}>
      <Text style={{ position: "absolute" }}>Maps</Text>
      <View style={styles.mapContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.inputInnerContainer}>
            <View style={styles.IconContainer}>
              <Image
                source={require("../Images/Swift.png")}
                style={styles.swiftIcon}
              />
            </View>
            <TextInput
              placeholder="Search Here"
              style={styles.input}
            ></TextInput>
            <View style={styles.IconContainer}>
              <Image
                source={require("../Images/bj picture.gif")}
                style={styles.profileIcon}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    //borderWidth: 2,
    //borderColor: "blue",
  },
  mapContainer: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    alignSelf: "stretch",
    justifyContent: "flex-start",
    height: "100%",
    width: "auto",
    //borderWidth: 2,
    borderColor: "red",
  },

  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    // borderWidth: 2,
    // borderColor: "blue",
    top: 0,
    bottom: 250,
    marginVertical: 50,
    width: "100%",
  },
  inputInnerContainer: {
    position: "absolute",
    backgroundColor: "white",
    flex: 1,
    height: 60,
    // borderWidth: 2,
    // borderColor: "green",
    width: "97%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 8,
  },
  input: {
    height: 50,
    width: 245,
    borderColor: "red",
    fontSize: 20,
    // borderColor: "blue",
    // borderWidth: 1,
  },
  IconContainer: {
    height: 50,
    width: 40,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    //  borderColor: "red",
    // borderWidth: 1,
  },
  profileIcon: {
    height: 40,
    resizeMode: "contain",
  },
  swiftIcon: {
    height: 30,
    resizeMode: "contain",
  },
});
