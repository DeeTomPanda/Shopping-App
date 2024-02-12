import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home/Home";
import { ProductDetails } from "./ProductDetails/ProductDetails";

const Stack = createStackNavigator();

export const SubMain: React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"home"} component={Home} />
      <Stack.Screen name={"productDetails"} component={ProductDetails} />
    </Stack.Navigator>
  );
};
