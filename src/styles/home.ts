import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const ContainerHome = styled.View`
  padding: 20px 15px;
`;

export const ContainerHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HomeTitle = styled.Text`
  font-size: 28px;
  font-family: 'Jost-Medium';
`;

export const HomeSubTitle = styled.Text`
  font-size: 20px;
  font-family: 'Jost-Regular';
`;

export const UserAvatar = styled(FastImage)`
  width: 46px;
  height: 46px;
  border-radius: 46px;
`;
