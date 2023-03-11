import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealCategoriesScreen from "./screen/MealCategoriesScreen";
import favMealsScreen from "./screen/FavMealsScreen";
import MealsCategoriesDetailsScreen from "./screen/MealsCategoriesDetailsScreen";
import MealsDetails from "./screen/MealsDetails";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        sceneContainerStyle: {
          backgroundColor: "#684e4e",
        },
        drawerStyle: {
          backgroundColor: "#351401",
        },
        drawerActiveBackgroundColor: "#684e4e",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="MealCategories"
        component={MealCategoriesScreen}
        options={{
          title: "Meals Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" size={size} color={color} />;
          },
        }}
      />
      <Stack.Screen
        name="favMealsScreen"
        component={favMealsScreen}
        options={{
          title: "Favourite Meals",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="MealsCategoriesDetailsScreen"
            component={MealsCategoriesDetailsScreen}
          />
          <Stack.Screen name="MealsDetails" component={MealsDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
