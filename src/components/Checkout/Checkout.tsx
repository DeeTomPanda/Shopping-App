import React from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackList = {
  Home: undefined;
  ProductDetails: undefined;
  Checkout: undefined;
};

type TabList = {
  Home: undefined;
  Favourites: undefined;
  Settings: undefined;
};

type RootTabList = {
  Tab: TabList;
  SubMain: RootStackList;
};

type Props = StackScreenProps<RootTabList, "Checkout">;

export const Checkout: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Button
        title={"Home"}
        onPress={() => navigation.navigate("Tab", { screen: "Home" })}
      ></Button>
      <Text>{"HO"}</Text>
    </View>
  );
};
