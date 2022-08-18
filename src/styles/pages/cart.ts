import { Dimensions, TouchableHighlight } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import styled from "styled-components/native";

const { height: HEIGHT } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%;
  height: ${HEIGHT}px;
  padding: 20px 0 0 0;
  justify-content: space-between;
`;

export const BodyCart = styled.View`
  padding: 0 15px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ClearButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const ClearButtonText = styled.Text`
  color: ${({ theme }) => theme.red};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.foreground};
`;

export const FooterCart = styled.View`
  width: 100%;
  padding: 25px 5% 125px 5%;
  background-color: ${({ theme }) => theme.selection};
`;

export const ContainerTotalPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerIcon = styled.View`
  flex-direction: row;
  padding-left: 20px;
  justify-content: center;
  align-items: center;
`;

export const TextTotalPrice = styled.Text`
  font-family: "Jost-Medium";
  color: ${({ theme }) => theme.foreground};
  margin: 0 8px;
`;

export const ButtonPurchase = styled(RectButton)`
  width: 100%;
  margin-top: 10px;
  align-self: center;
  padding: 18px 0;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.currentLine};
`;

export const TextPurchase = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: "Jost-Bold";
  color: ${({ theme }) => theme.background};
`;
