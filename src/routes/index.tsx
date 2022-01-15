import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MyTabs from "./bottom.routes";
import { useTheme } from "styled-components/native";

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
      <MyTabs />
    </NavigationContainer>
  );
};

export default Router;
