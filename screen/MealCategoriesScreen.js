import React from "react";
import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Category from "../components/Category";

const MealCategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => <Category categoryId={item.id} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default MealCategoriesScreen;
