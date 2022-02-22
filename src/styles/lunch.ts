import { Dimensions, ScrollView } from "react-native";
import FastImage from "react-native-fast-image";
import { RectButton } from "react-native-gesture-handler";
import { Shadow } from "react-native-shadow-2";
import styled from "styled-components/native";
import { SpringScrollView } from "react-native-spring-scrollview";
import { DefaultText } from "./global";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

const percentageWIDTH = WIDTH / 100;

export const Container = styled.KeyboardAvoidingView`
  flex-direction: column;
  height: ${HEIGHT}px;
`;

export const Header = styled.View`
  padding: 20px 25px 0 25px;
  flex-direction: column;
`;

export const Footer = styled(SpringScrollView)`
  flex: 1;
  padding: 0 25px 0 25px;
  background-color: ${({ theme }) => theme.selection};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const LunchTitle = styled(DefaultText)`
  font-size: 26px;
  font-family: "Jost-Bold";
  margin-top: 20px;
`;

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

export const BackButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.orange};
  border-radius: 8px;
  padding: 2px;
`;

export const ContainerListInformation = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;

export const ContainerInformation = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.orange};
  padding: 3px 10px;
  border-radius: 25px;
  margin-right: 15px;
`;

export const TextInformation = styled(DefaultText)`
  font-family: "Jost-Regular";
  margin-left: 8px;
  font-size: 13px;
`;

export const ButtonAddToCart = styled(RectButton)`
  width: 80%;
  background-color: ${({ theme }) => theme.currentLine};
  border-radius: 15px;
  align-self: center;
  margin-top: 30px;
`;

export const ContainerAccessibleButtonAddToCart = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
`;

export const ButtonAddToCartText = styled(DefaultText)`
  font-size: 17px;
  font-family: "Jost-Medium";
  margin: 0 8px;
`;

export const CardIngredient = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  margin: 5px 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.orange};
`;

export const TextIngredient = styled(DefaultText)`
  font-family: "Jost-Regular";
  font-size: 15px;
`;

export const ImageLunch = styled(FastImage)<{
  imageSize: {
    width: number;
    height: number;
  };
}>`
  width: ${percentageWIDTH * 75 - 50}px;
  height: ${({ imageSize }) =>
    imageSize.height * ((percentageWIDTH * 75 - 50) / imageSize.width)}px;
  border-radius: 2000px;
`;

export const ContainerFooterShadow = styled(Shadow).attrs({
  containerViewStyle: {
    width: WIDTH,
    flex: 1,
    borderRadius: 25,
  },
  viewStyle: {
    width: WIDTH,
    borderRadius: 25,
    flex: 1,
  },
  distance: 3,
  getChildRadius: false,
  startColor: "#00000008",
})``;

export const ContainerImageShadow = styled(Shadow).attrs({
  containerViewStyle: {
    marginTop: -25,
    marginBottom: 25,
    alignSelf: "center",
  },
  viewStyle: {
    borderRadius: WIDTH,
  },
  distance: 10,
  getChildRadius: false,
  startColor: "#00000015",
})``;

export const ContainerButtonShadow = styled(Shadow).attrs({
  containerViewStyle: {},
  viewStyle: {
    borderRadius: 8,
  },
  distance: 5,
  getChildRadius: false,
  startColor: "#00000015",
})``;
