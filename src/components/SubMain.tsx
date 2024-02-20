import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home/Home";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import { Checkout } from "./Checkout/Checkout";

type RootStackList = {
  Home: undefined;
  ProductDetails: undefined;
  Checkout: undefined;
};

const Stack = createStackNavigator<RootStackList>();

export const SubMain: React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen name={"ProductDetails"} component={ProductDetails} />
      <Stack.Screen name={"Checkout"} component={Checkout} />
    </Stack.Navigator>
  );
};
