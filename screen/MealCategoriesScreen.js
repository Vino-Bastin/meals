import React, { useContext } from "react";
import { FlatList } from "react-native";

import { MealsContext } from "../hooks/Store";
import Category from "../components/Category";

const MealCategoriesScreen = () => {
  const { categories } = useContext(MealsContext);
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => <Category categoryId={item.id} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default MealCategoriesScreen;
