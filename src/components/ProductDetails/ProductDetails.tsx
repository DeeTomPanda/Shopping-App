import React from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackList = {
  Home: undefined;
  ProductDetails: undefined;
};

type Props = StackScreenProps<RootStackList, "ProductDetails">;

export const ProductDetails: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Button
        title={"Baack"}
        onPress={() => navigation.navigate("Home")}
      ></Button>
      <Text>{"HO"}</Text>
    </View>
  );
};
