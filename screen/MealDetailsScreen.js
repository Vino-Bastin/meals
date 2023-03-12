import React, { useContext, useLayoutEffect } from "react";
import { Image, StyleSheet, ScrollView, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import MealOverView from "../components/MealOverView";
import Header from "../components/ui/Header";
import List from "../components/ui/List";
import { MealsContext } from "../hooks/Store";

const MealDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { meals, isFavorite, toggleFavorite } = useContext(MealsContext);

  const mealId = route.params.mealId;
  const meal = meals.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meal Details",
      headerRight: () => (
        <Ionicons
          name="ios-star"
          size={24}
          color={isFavorite(mealId) ? "orange" : "white"}
          onPress={toggleFavorite.bind(this, mealId)}
        />
      ),
    });
  }, [navigation, route, isFavorite, toggleFavorite, mealId]);

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
