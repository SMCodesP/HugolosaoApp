import { RectButton } from "react-native-gesture-handler";
import { Shadow } from "react-native-shadow-2";
import styled from "styled-components/native";

export const ButtonText = styled.Text`
  font-size: 15px;
  font-family: "Jost-Bold";
  color: ${({ theme }) => theme.background};
`;

export const ContainerButton = styled(RectButton)`
  width: 47.5%;
  height: 100px;
  background-color: ${({ theme }) => theme.currentLine};
  border-radius: 10px;
  margin: 1.25%;
  position: relative;
  overflow: hidden;
`;

export const ImageOption = styled.Image`
  width: 92px;
  height: 92px;
  position: absolute;
  left: -32px;
  top: -32px;
  transform: rotate(135deg);
  opacity: 0.6;
`;

export const Container: any = styled(Shadow).attrs(({ theme }) => ({
  containerViewStyle: {
    height: 100,
    width: "100%",
    borderRadius: 10,
  },
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 100,
    width: "100%",
  },
  distance: 5,
  getChildRadius: false,
  startColor: "#00000015",
}))``;
