import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealCategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Categories Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default MealCategoriesScreen;
