import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card from "./ui/Card";
import Title from "./ui/Title";
import MealOverView from "./MealOverView";
import { MEALS } from "../data/dummy-data";

const Meal = ({ mealId }) => {
  const navigation = useNavigation();
  const meal = MEALS.find((meal) => meal.id === mealId);

  const onPress = () => {
    navigation.navigate("MealDetails", {
      mealId: meal.id,
    });
  };

  return (
    <View style={styles.container}>
      <Card
        onPress={onPress}
        outerContainerStyle={styles.outerContainer}
        innerContainerStyle={styles.innerContainer}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: meal.imageUrl,
            }}
            style={styles.image}
          />
        </View>
        <Title>{meal.title}</Title>
        <MealOverView
          complexity={meal.complexity}
          duration={meal.duration}
          affordability={meal.affordability}
        />
      </Card>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  outerContainer: {
    height: 250,
    width: 300,
    overFlow: "hidden",
    backgroundColor: "#fff",
  },
  innerContainer: {
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "100%",
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
