import React, { createContext, useState } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsContext = createContext({
  categories: [],
  meals: [],
  favMeals: [],
  toggleFavorite: (id) => {},
  isFavorite: (id) => {},
});

const MealsContextProvider = ({ children }) => {
  const [favMeals, setFavMeals] = useState([]);

  const toggleFavorite = (id) => {
    if (favMeals.includes(id)) {
      setFavMeals((currentFavMeals) => {
        return currentFavMeals.filter((favMealId) => favMealId !== id);
      });
    } else {
      setFavMeals((currentFavMeals) => {
        return [...currentFavMeals, id];
      });
    }
  };

  const isFavorite = (id) => {
    return favMeals.some((favMealId) => favMealId === id);
  };

  return (
    <MealsContext.Provider
      value={{
        meals: MEALS,
        categories: CATEGORIES,
        favMeals,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export { MealsContextProvider, MealsContext };
