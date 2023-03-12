import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ style, children }) => {
  return <Text style={[style, styles.text]}>{children}</Text>;
};

export default Subtitle;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
});
