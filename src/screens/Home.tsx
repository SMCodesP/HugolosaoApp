import React from 'react';
import {View} from 'react-native';
import {SpringScrollView} from 'react-native-spring-scrollview';
import {
  ContainerHead,
  ContainerHome,
  HomeSubTitle,
  HomeTitle,
  UserAvatar,
} from '../styles/home';

const Home = () => {
  return (
    <SpringScrollView decelerationRate={0}>
      <ContainerHome>
        <ContainerHead>
          <View>
            <HomeTitle>Olá SMCodes,</HomeTitle>
            <HomeSubTitle>O que você comer hoje?</HomeSubTitle>
          </View>
          <UserAvatar source={{uri: 'https://smcodes.tk/favicon.jpg'}} />
        </ContainerHead>
      </ContainerHome>
    </SpringScrollView>
  );
};

export default Home;
