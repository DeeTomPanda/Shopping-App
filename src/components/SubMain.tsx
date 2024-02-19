import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home/Home";
import { ProductDetails } from "./ProductDetails/ProductDetails";

type RootStackList = {
  Home: undefined;
  ProductDetails: undefined;
};

const Stack = createStackNavigator<RootStackList>();

export const SubMain: React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen name={"ProductDetails"} component={ProductDetails} />
    </Stack.Navigator>
  );
};
