import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MyTabs from "./bottom.routes";
import { useTheme } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import Lunch from "../screens/Lunch";

const Stack = createStackNavigator();

const Router = () => {
  const theme = useTheme();

  return (
    <NavigationContainer
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
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={MyTabs} />
        <Stack.Screen name="Lunch" component={Lunch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
