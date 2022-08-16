/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";
import * as React from "react";

import { RootStackParamList, RootTabParamList } from "../../types";

import { BottomTab as BottomTabComponent } from "../components/BottomTab";

import Home from "../screens/home";

const Navigation = () => {
  const theme = useTheme();

  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      // theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      theme={{
        dark: false,
        colors: {
          background: theme.background,
          card: "transparent",
          border: "transparent",
          notification: theme.red,
          primary: theme.comment,
          text: theme.foreground,
        },
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Root"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const theme = useTheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          height: 55,
          borderRadius: 15,
          backgroundColor: "transparent",
        },
        tabBarItemStyle: {
          margin: 0,
          paddingVertical: 8,
        },
        tabBarActiveTintColor: theme.comment,
      }}
      tabBar={(props) => <BottomTabComponent bottomTabBarProps={props} />}
      initialRouteName="Home"
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) => <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;

export default Navigation;
