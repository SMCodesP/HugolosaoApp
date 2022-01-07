import React from 'react';
import {Shadow} from 'react-native-shadow-2';

// import { Container } from './styles';
import {BottomTabBar, BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useWindowDimensions} from 'react-native';
import {useTheme} from 'styled-components/native';

const BottomTab: React.FC<{
  bottomTabBarProps: BottomTabBarProps;
}> = ({bottomTabBarProps}) => {
  const {width} = useWindowDimensions();
  const theme = useTheme();

  return (
    <Shadow
      containerViewStyle={{
        marginHorizontal: 20,
        position: 'absolute',
        bottom: 25,
        width: '100%',
        height: 50,
      }}
      viewStyle={{
        backgroundColor: theme.currentLine,
        borderRadius: 15,
        paddingHorizontal: 15,
        width: width - 40,
        position: 'relative',
        bottom: 0,
      }}
      distance={6}
      startColor="#00000010">
      <BottomTabBar {...bottomTabBarProps} />
    </Shadow>
  );
};

export {BottomTab};
