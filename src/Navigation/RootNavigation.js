/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../Login/LoginScreen';
import SignUpScreen from '../Login/SignUpScreen';
import SignUpDetailScreen from '../Login/SignUpDetailScreen';
import SignInScreen from '../Login/SignInScreen';
import HomeScreen from '../Home/HomeScreen';
import EatScreen from '../Eat/EatScreen';
import TrackScreen from '../Track/TrackScreen';
import SearchScreen from '../Search/SearchScreen';
import FilterScreen from '../Search/FilterScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Home tabbar icon

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('../../assets/common/home_active.png')
              : require('../../assets/common/home_inactive.png');
          } else if (route.name === 'Eat') {
            iconName = focused
              ? require('../../assets/common/food_active.jpg')
              : require('../../assets/common/food_inactive.jpg');
          } else if (route.name === 'Track') {
            iconName = focused
              ? require('../../assets/common/track_active.jpg')
              : require('../../assets/common/track_inactive.jpg');
          }

          return <Image source={iconName} style={{width: 24, height: 24}} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Eat" component={EatScreen} />
      <Tab.Screen name="Track" component={TrackScreen} />
    </Tab.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignUpDetails" component={SignUpDetailScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />

        <Stack.Screen
          name="Home"
          component={MyTabs}
          screenOptions={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
