/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Router from "./src/routes";
import { light } from "./src/themes";
import { CartProvider } from "./src/contexts/CartContext";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <CartProvider>
        <Router />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
