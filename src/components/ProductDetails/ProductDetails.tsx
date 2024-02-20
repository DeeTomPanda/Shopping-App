import React from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { productsType } from "../../store/interfaces";

type RootStackList = {
  Home: undefined;
  ProductDetails: { item: productsType };
  Checkout: undefined;
};

type Props = StackScreenProps<RootStackList, "ProductDetails">;

export const ProductDetails: React.FC<Props> = ({ navigation, route }) => {
  console.log(navigation, route);
  return (
    <View>
      <Text>{route.params.item.title}</Text>
      <Button
        title={"Checkout"}
        onPress={() => navigation.navigate("Checkout")}
      ></Button>
      <Text>{"HO"}</Text>
    </View>
  );
};
