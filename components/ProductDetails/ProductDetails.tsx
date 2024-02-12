import React from "react";
import { Text, View, Button } from "react-native";

export const ProductDetails = ({ navigation }) => {
  return (
    <View>
      <Button
        title={"Baack"}
        onPress={() => navigation.navigate("home")}
      ></Button>
      <Text>{"HO"}</Text>
    </View>
  );
};
