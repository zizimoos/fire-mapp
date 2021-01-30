import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import { CardStyleInterpolators } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="Home" component={Home}></Stack.Screen>
    <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
  </Stack.Navigator>
);
