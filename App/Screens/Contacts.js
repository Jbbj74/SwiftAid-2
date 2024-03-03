import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Contacts = () => {
  return (
    <View style={styles.container}>
      <Text>Contacts</Text>
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderWidth: 2,
    borderColor: "blue",
  },
});
