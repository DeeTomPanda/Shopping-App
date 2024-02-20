import { ActivityIndicator, Card } from "react-native-paper";
import {
  TouchableWithoutFeedback,
  FlatList,
} from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, TouchableHighlight } from "react-native";
import { useTailwind } from "tailwind-rn";
import { selectProduct } from "../../store/slices";
import { useAppDispatch } from "../../store/hooks";
import { productsType } from "../../store/interfaces";

export const ProductItem: React.FC<{ navigation: any; products: any }> = ({
  navigation,
  products,
}) => {
  const [flatListProducts, setFlatListProducts] =
    useState<productsType[]>(products);
  const tailwind = useTailwind();
  const dispatch = useAppDispatch();
  return (
    <>
      <View>
        <Text style={tailwind("text-3xl text-black mb-2")}>
          {"Recommended"}
        </Text>
      </View>
      <View style={tailwind("w-full flex flex-1")}>
        <FlatList
          onEndReachedThreshold={0.2}
          onEndReached={() => setFlatListProducts((prev) => [...prev, ...prev])}
          numColumns={2}
          data={flatListProducts}
          columnWrapperStyle={{
            padding: 5,
            gap: 15,
          }}
          contentContainerStyle={tailwind(" w-full  items-center min-h-20")}
          initialNumToRender={4}
          ListFooterComponent={footer}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                dispatch(selectProduct(item));
                navigation.navigate("SubMain", {
                  screen: "ProductDetails",
                  params: { item: item },
                });
              }}
            >
              <>
                <View style={tailwind("flex flex-col rounded-md h-40 w-44 ")}>
                  <Card.Cover
                    style={tailwind(
                      "h-24 w-40 self-center border-2 rounded-md border-slate-300"
                    )}
                    source={{ uri: item.thumbnail }}
                    alt={String(item.id)}
                  />
                  <Card.Content style={tailwind("w-32 overflow-hidden")}>
                    <Text style={tailwind("w-40  font-bold rounded-md")}>
                      {"$" + item.price}
                    </Text>
                    <Text numberOfLines={2} style={tailwind(" text-xs")}>
                      {item.title}
                    </Text>
                  </Card.Content>
                </View>
              </>
            </TouchableWithoutFeedback>
          )}
          keyExtractor={(item, i) => String(i)}
        ></FlatList>
      </View>
    </>
  );
};

const footer = () => {
  const tailwind = useTailwind();
  return (
    <View>
      <ActivityIndicator size={20}></ActivityIndicator>
    </View>
  );
};
