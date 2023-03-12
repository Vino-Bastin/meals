import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { MealsContext } from "../hooks/Store";
import Meal from "../components/Meal";
import Title from "../components/ui/Title";

const FavMealsScreen = () => {
  const { favMeals } = useContext(MealsContext);

  if (!favMeals.length)
    return (
      <View style={styles.screen}>
        <Title style={styles.text}>
          No favorite meals found. Start adding some!
        </Title>
      </View>
    );

  return (
    <FlatList
      data={favMeals}
      keyExtractor={(item) => item}
      renderItem={({ item }) => {
        return <Meal mealId={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default FavMealsScreen;
