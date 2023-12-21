import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screen/Home";

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
