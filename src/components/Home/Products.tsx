import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, TouchableHighlight } from "react-native";
import { useTailwind } from "tailwind-rn";
import { ProductItem } from "./ProductItem";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchDataAsync } from "../../store/slices";

import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

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

export const Products: React.FC<BottomTabScreenProps<TabList, "Home">> = ({
  navigation,
}) => {
  const tailwind = useTailwind();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => {
    return state.root.products;
  });

  useEffect(() => {
    async function fetchIt() {
      await dispatch(fetchDataAsync());
    }
    fetchIt();
  }, []);

  // Animation goes here
  const height = Dimensions.get("window").height / 2;
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      if (
        translateY.value + 5 <= height / 2 ||
        translateY.value - 5 >= (-1 * height) / 2.25
      )
        ctx.startY = translateY.value;
    },
    onActive: (event, ctx: Record<string, any>) => {
      const newY = ctx.startY + event.translationY;
      const upperLim = height / 2;
      const lowerLim = (-1 * height) / 2.25;

      translateY.value = Math.max(Math.min(newY, upperLim), lowerLim);
    },
    onEnd: () => {},
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[animatedStyle]}>
        <View
          style={tailwind("flex flex-col flex-1 grow mt-4 p-2  z-10 bg-white")}
        >
          {products.length < 2 ? null : (
            <ProductItem navigation={navigation} products={products} />
          )}
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};
