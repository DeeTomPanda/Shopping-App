import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Text } from "react-native";
import { Home } from "./Home/Home";
import { Settings } from "./Settings/Settings";
import { Favourites } from "./Favourites/Favourites";
import { Categories } from "./Categories/Categories";
import { AnimatedTabIcon } from "./AnimatedTabIcon";
import { SubMain } from "./SubMain";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const TabNav = () => {
  const [currentTab, setCurrentTab] = React.useState<string>("home");
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "gold",
        tabBarLabel: ({ focused }) => {
          if (focused) {
            return <Text>{""}</Text>;
          }
          return <Text>{route.name}</Text>;
        },
        tabBarIcon: ({ color, size }) => {
          let iconName!: string;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Favourites") {
            iconName = "heart-circle-outline";
          } else if (route.name === "Settings") {
            iconName = "dots-vertical";
          } else if (route.name === "Categories") {
            iconName = "dots-grid";
          }

          return (
            <AnimatedTabIcon
              name={iconName}
              size={size}
              color={color}
              currentTab={currentTab}
            />
          );
        },
        tabBarStyle: { backgroundColor: "white" },
      })}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        listeners={{
          tabPress: (e) => {
            setCurrentTab("home");
          },
        }}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name={"Categories"}
        component={Categories}
        listeners={{
          tabPress: (e) => {
            setCurrentTab("dots-grid");
          },
        }}
      />
      <Tab.Screen
        name={"Favourites"}
        component={Favourites}
        listeners={{
          tabPress: (e) => {
            setCurrentTab("heart-circle-outline");
          },
        }}
      />
      <Tab.Screen
        name={"Settings"}
        component={Settings}
        listeners={{
          tabPress: (e) => {
            setCurrentTab("dots-vertical");
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

export const Main: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNav}></Stack.Screen>
        <Stack.Screen name="SubMain" component={SubMain}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
