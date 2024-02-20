import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { Searchbar } from "react-native-paper";
import { useTailwind } from "tailwind-rn";

export const Hero: React.FC<{}> = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("flex flex-col w-full bg-heroBlue px-2 pt-8 pb-5")}>
      <Text style={tailwind("font-bold text-white my-2 text-xl")}>
        {"Hey User,"}
      </Text>
      <KeyboardAvoidingView behavior={"height"}>
        <Searchbar
          style={tailwind("w-11/12 self-center my-4")}
          value={""}
          loading={false}
          placeholder="Search Products or Store"
        />
      </KeyboardAvoidingView>
      <View style={tailwind("flex flex-row w-full justify-between my-2")}>
        <View style={tailwind("flex flex-col w-fit ")}>
          <Text style={tailwind("font-semibold text-slate-300 text-sm")}>
            {"Delivery to"}
          </Text>
        </View>
        <View style={tailwind("flex flex-col w-fit ")}>
          <Text style={tailwind("font-semibold text-slate-300 text-sm")}>
            {"Within"}
          </Text>
        </View>
      </View>
    </View>
  );
};
