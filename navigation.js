import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screen/Home";
import NonVeg from "./src/screen/NonVeg";
import Veg from "./src/screen/Veg";
import Cuisine from "./src/screen/Cuisine";
import Ingrediants from "./src/screen/Ingrediants";

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cuisine"
        component={Cuisine}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ingrediants"
        component={Ingrediants}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NonVeg"
        component={NonVeg}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Veg"
        component={Veg}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
