import React from "react";
import { Image, StyleSheet, ScrollView, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import Title from "../components/ui/Title";
import MealOverView from "../components/MealOverView";
import Header from "../components/ui/Header";
import { MEALS } from "../data/dummy-data";
import List from "../components/ui/List";

const MealDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: meal.imageUrl,
          }}
          style={styles.image}
        />
      </View>
      <Title style={styles.title}>{meal.title}</Title>
      <MealOverView
        textStyle={styles.mealOverView}
        complexity={meal.complexity}
        duration={meal.duration}
        affordability={meal.affordability}
      />
      <Header>Ingredients</Header>
      <List data={meal.ingredients} />
      <Header>Steps</Header>
      <List data={meal.steps} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },
  imageContainer: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 24,
  },
  mealOverView: {
    color: "white",
  },
});

export default MealDetails;
