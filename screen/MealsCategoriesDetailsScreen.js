import React, { useContext, useLayoutEffect } from "react";
import { FlatList, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Meal from "../components/Meal";
import { MealsContext } from "../hooks/Store";

const MealsCategoriesDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { categories, meals } = useContext(MealsContext);

  const { categoryId } = route.params;

  const selectedCategory = categories.find((cat) => cat.id === categoryId);
  const selectedMeals = meals.filter((meal) =>
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
