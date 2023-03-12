import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Subtitle from "./ui/Subtitle";

const MealOverView = ({
  complexity,
  duration,
  affordability,
  containerStyle,
  textStyle,
}) => {
  return (
    <View style={[containerStyle, styles.container]}>
      <Subtitle style={[textStyle, styles.text]}>{complexity}</Subtitle>
      <Subtitle style={[textStyle, styles.text]}>{duration}m</Subtitle>
      <Subtitle style={[textStyle, styles.text]}>{affordability}</Subtitle>
    </View>
  );
};

export default MealOverView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
