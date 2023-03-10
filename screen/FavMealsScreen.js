import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Favorite Meals Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default FavMealsScreen;
