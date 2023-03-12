import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import favMealsScreen from "./screen/FavMealsScreen";
import MealCategoriesScreen from "./screen/MealCategoriesScreen";
import MealsCategoriesDetailsScreen from "./screen/MealsCategoriesDetailsScreen";
import MealDetails from "./screen/MealDetailsScreen";

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
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" size={size} color={color} />;
          },
        }}
      />
      <Stack.Screen
        name="favMealsScreen"
        component={favMealsScreen}
        options={{
          title: "Favorite Meals",
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
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            contentStyle: {
              backgroundColor: "#684e4e",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsCategoriesDetailsScreen"
            component={MealsCategoriesDetailsScreen}
          />
          <Stack.Screen name="MealDetails" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
