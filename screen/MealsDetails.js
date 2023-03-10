import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealsDetails = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Meals Categories Details Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default MealsDetails;
