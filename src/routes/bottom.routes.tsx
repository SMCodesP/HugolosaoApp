import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Login from '../screens/session/Login';
import {BottomTab} from '../components/BottomTab';
import Register from '../screens/session/Register';
import Menu from '../screens/Menu';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const SessionStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          height: 55,
          borderRadius: 15,
        },
        tabBarItemStyle: {
          margin: 0,
          paddingVertical: 8,
        },
      }}
      tabBar={props => <BottomTab bottomTabBarProps={props} />}>
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              color={color}
              size={22}
              name={focused ? 'home' : 'home-outline'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cardápio"
        component={Menu}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              color={color}
              size={22}
              name={focused ? 'book' : 'book-outline'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Conta"
        component={SessionStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <FontAwesome
              color={color}
              size={22}
              name={focused ? 'user' : 'user-o'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
