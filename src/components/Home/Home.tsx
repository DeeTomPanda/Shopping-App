import React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Hero } from "./Hero";
import { ImgCarousel } from "./ImgCarousel";
import { Products } from "./Products";
import { StackScreenProps } from "@react-navigation/stack";
import {
  BottomTabBarProps,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";

type StackList = {
  Home: undefined;
  ProductDetails: undefined;
  Checkout: undefined;
};

type TabList = {
  Settings: undefined;
  Categories: undefined;
  Favourites: undefined;
  Home: undefined;
};

type RootStackList = {
  SubMain: StackList;
  TabNav: TabList;
};

export const Home: React.FC<
  BottomTabScreenProps<TabList, "Home"> & StackScreenProps<StackList, "Home">
> = ({ navigation, route }) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("flex flex-col w-full h-full items-center")}>
      <Hero />
      <ImgCarousel />
      <Products navigation={navigation} route={route} />
    </View>
  );
};
