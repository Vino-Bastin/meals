import { StyleSheet, Text } from "react-native";
import React from "react";

const Title = ({ children, style }) => {
  return <Text style={[styles.mealTitle, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  mealTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: "wrap",
    padding: 10,
  },
});
