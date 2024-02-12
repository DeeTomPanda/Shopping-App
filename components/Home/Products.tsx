import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchDataAsync } from "../../store/slices";
import { Card } from "react-native-paper";

export const Products: React.FC<{}> = () => {
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
        <Text style={tailwind("font-semibold text-md")}>
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
          <View style={tailwind(" flex flex-1")}>
            <FlatList
              numColumns={2}
              data={products.slice(1)}
              columnWrapperStyle={{
                padding: 15,
              }}
              contentContainerStyle={tailwind(
                " w-full items-center  justify-center"
              )}
              ListFooterComponent={renderFooter}
              renderItem={({ item }) => (
                <>
                  <View
                    style={tailwind(
                      "flex flex-0 flex-col border-sky-300 border-3 rounded-md h-75 w-35"
                    )}
                  >
                    <Card.Cover
                      style={tailwind(
                        "h-25 w-35 mx-2 border-2 rounded-md border-slate-300 object-fit"
                      )}
                      source={{ uri: item.thumbnail }}
                      alt={String(item.id)}
                    />
                    <Card.Content
                      style={tailwind("w-30 overflow-hidden break-words")}
                    >
                      <Text style={tailwind("w-40  font-bold rounded-md")}>
                        {"$" + item.price}
                      </Text>
                      <Text
                        numberOfLines={2}
                        style={tailwind(" flex-0 text-xs  ")}
                      >
                        {item.title}
                      </Text>
                    </Card.Content>
                  </View>
                </>
              )}
            ></FlatList>
          </View>
        </>
      )}
    </View>
  );
};
