import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { DefaultText } from "../../styles/global";

export const QuantityPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const LunchPrice = styled(DefaultText)`
  font-size: 18px;
  font-family: "Jost-Medium";
`;

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const QuantityButtonAddRemove = styled(RectButton)`
  background-color: ${({ theme }) => theme.currentLine};
  padding: 2px 14px;
  border-radius: 5px;
`;

export const QuantityTextAddRemove = styled(DefaultText)`
  font-size: 12px;
  font-family: "Jost-Bold";
`;

export const QuantityInput = styled.TextInput`
  font-size: 14px;
  font-family: "Jost-Regular";
  text-align: center;
  padding: 0 5px;
  color: ${({ theme }) => theme.foreground};
`;
