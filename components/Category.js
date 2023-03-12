import React from "react";
import { StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card from "./ui/Card";

import { CATEGORIES } from "../data/dummy-data";

const Category = ({ categoryId }) => {
  const category = CATEGORIES.find((category) => category.id === categoryId);

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("MealsCategoriesDetailsScreen", {
      categoryId: category.id,
    });
  };

  return (
    <Card
      onPress={onPress}
      outerContainerStyle={{
        backgroundColor: category.color,
      }}
    >
      <Text style={styles.text}>{category.title}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  fullSpace: {
    flex: 1,
  },
  outerContainer: {
    margin: 15,
    height: 150,
    borderRadius: 8,
    elevation: 5,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Category;
