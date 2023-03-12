import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Title from "./Title";

const Header = ({ children }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>{children}</Title>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: "#351401",
    marginVertical: 10,
  },
  title: {
    color: "white",
    paddingVertical: 2,
  },
});
