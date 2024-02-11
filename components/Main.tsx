import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, Text} from 'react-native';
import {Home} from './Home/Home';
import {Settings} from './Settings/Settings';
import {Favourites} from './Favourites/Favourites';
import {Products} from './Home/Products';
import {AnimatedTabIcon} from './AnimatedTabIcon';

const Tab = createBottomTabNavigator();

export const Main: React.FC<{}> = () => {
  const [currentTab, setCurrentTab] = React.useState<string>('home');
  return (
    <NavigationContainer>
      <Tab.Navigator
        backBehavior="history"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'gold',
          tabBarLabel: ({focused}) => {
            if (focused) {
              return <Text>{''}</Text>;
            }
            return <Text>{route.name}</Text>;
          },
          tabBarIcon: ({color, size}) => {
            let iconName!: string;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Favourites') {
              iconName = 'heart-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = 'dots-vertical';
            } else if (route.name === 'Products') {
              iconName = 'dots-grid';
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
        })}>
        <Tab.Screen
          name={'Home'}
          component={Home}
          listeners={{
            tabPress: e => {
              setCurrentTab('home');
            },
          }}
          options={{headerShown: false}}
        />

        <Tab.Screen
          name={'Products'}
          component={Products}
          listeners={{
            tabPress: e => {
              setCurrentTab('dots-grid');
            },
          }}
        />
        <Tab.Screen
          name={'Favourites'}
          component={Favourites}
          listeners={{
            tabPress: e => {
              setCurrentTab('heart-circle-outline');
            },
          }}
        />
        <Tab.Screen
          name={'Settings'}
          component={Settings}
          listeners={{
            tabPress: e => {
              setCurrentTab('dots-vertical');
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};