import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screen/Home";
import Dessert from "./src/screen/Dessert";
import NonVeg from "./src/screen/NonVeg";
import Veg from "./src/screen/Veg";
import Search from "./src/screen/Search";

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
        name="Dessert"
        component={Dessert}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
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
