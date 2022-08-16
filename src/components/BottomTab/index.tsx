import React from "react";

// import { Container } from './styles';
import { BottomTabBar, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useWindowDimensions, View } from "react-native";
import { useTheme } from "styled-components/native";

const BottomTab: React.FC<{
  bottomTabBarProps: BottomTabBarProps;
}> = ({ bottomTabBarProps }) => {
  const { width } = useWindowDimensions();
  const theme = useTheme();

  return (
    <View
      style={{
        marginHorizontal: 20,
        position: "absolute",
        bottom: 25,
        width: "100%",
        height: 50,
      }}
    >
      <View
        style={{
          backgroundColor: theme.currentLine,
          borderRadius: 15,
          paddingHorizontal: 15,
          width: width - 40,
          position: "relative",
          bottom: 0,
        }}
      >
        <BottomTabBar {...bottomTabBarProps} />
      </View>
    </View>
  );
};

export { BottomTab };
