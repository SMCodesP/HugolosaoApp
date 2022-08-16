import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";

import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/navigation";
import light from "./src/themes/light";

import "react-native-gesture-handler";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={light}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
