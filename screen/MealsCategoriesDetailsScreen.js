import React, { useLayoutEffect } from "react";
import { FlatList, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Meal from "../components/Meal";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsCategoriesDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  const selectedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [navigation, route]);

  return (
    <FlatList
      data={selectedMeals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Meal mealId={item.id} />;
      }}
    />
  );
};

export default MealsCategoriesDetailsScreen;
