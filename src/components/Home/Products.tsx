import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { useTailwind } from "tailwind-rn";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchDataAsync } from "../../store/slices";
import { Card } from "react-native-paper";

export const Products: React.FC<{ navigation: any }> = ({ navigation }) => {
  console.log(navigation);
  const tailwind = useTailwind();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.root);

  useEffect(() => {
    async function fetchIt() {
      await dispatch(fetchDataAsync());
    }
    fetchIt();
  }, []);

  const renderFooter = () => {
    return (
      <View>
        <Text style={tailwind("font-semibold text-sm")}>
          {"No More Products to Display!"}
        </Text>
      </View>
    );
  };

  return (
    <View style={tailwind("flex flex-col flex-1 mt-4 p-2")}>
      {products.length < 2 ? null : (
        <>
          <View>
            <Text style={tailwind("text-3xl text-black mb-2")}>
              {"Recommended"}
            </Text>
          </View>
          <View style={tailwind("w-full flex flex-1")}>
            <FlatList
              numColumns={2}
              data={products.slice(1)}
              columnWrapperStyle={{
                padding: 5,
                gap: 20,
              }}
              contentContainerStyle={tailwind(
                " w-full  items-center bg-red-200"
              )}
              initialNumToRender={5}
              ListFooterComponent={renderFooter}
              renderItem={({ item }) => (
                <TouchableHighlight
                  onPress={() => {
                    console.log("Touched");
                    navigation.navigate("SubMain", {
                      screen: "ProductDetails",
                    });
                  }}
                >
                  <>
                    <View
                      style={tailwind(
                        "flex flex-col border-sky-300 border-2 rounded-md h-40 w-44 "
                      )}
                    >
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
                </TouchableHighlight>
              )}
              keyExtractor={(item) => String(item.id)}
            ></FlatList>
          </View>
        </>
      )}
    </View>
  );
};
