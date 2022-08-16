import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const TitleCardMostSeller = styled.Text`
  font-size: 16px;
  font-family: "Jost-Medium";
`;

export const Quantity = styled.Text`
  font-size: 13px;
  font-family: "Jost-Regular";
  margin: 0 5px;
`;

export const ContainerQuantity = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonMostSeller = styled(RectButton)`
  margin: 1% 5px;
  background-color: ${({ theme }) => theme.orange};
  border-radius: 8px;
`;

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  flex-direction: row;
  width: 100%;
`;
