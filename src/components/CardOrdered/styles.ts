import FastImage from "react-native-fast-image";
import styled from "styled-components/native";
import { DefaultText } from "../../styles/global";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ItemImage = styled(FastImage)`
  width: 92px;
  height: 92px;
  border-radius: 12px;
`;

export const ContainerInformations = styled.View`
  flex: 1;
  margin: 0 10px;
  justify-content: space-around;
`;

export const ItemTitle = styled.Text`
  font-size: 16px;
  font-family: "Jost-Medium";
  color: ${({ theme }) => theme.foreground};
`;

export const ContainerInformationsFooter = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const PriceItem = styled.Text`
  font-size: 12px;
  font-family: "Jost-Bold";
  color: ${({ theme }) => theme.foreground};
`;
