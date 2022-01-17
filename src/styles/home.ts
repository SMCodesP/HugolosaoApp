import { transparentize } from "polished";
import FastImage from "react-native-fast-image";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { Shadow } from "react-native-shadow-2";
import styled from "styled-components/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const ContainerHome = styled.View`
  padding: 20px 15px;
`;

export const ContainerHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HomeTitle = styled.Text`
  font-size: 24px;
  font-family: "Jost-Medium";
  color: ${({ theme }) => theme.orange};
`;

export const HomeSubTitle = styled.Text`
  font-size: 16px;
  font-family: "Jost-Regular";
`;

export const UserAvatar = styled(FastImage)`
  width: 46px;
  height: 46px;
  border-radius: 46px;
  background-color: #000;
  elevation: 5;
`;

export const IconLunchUntried = styled(MaterialIcons)`
  transform: rotate(-45deg);
`;

export const TextLunchUntried = styled.Text`
  flex: 1;
  flex-grow: 1;
  padding-left: 15px;
  font-family: "Jost-Regular";
`;

export const ButtonLunch = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => transparentize(0.4, theme.cyan)};
  border-radius: 10px;
  width: 100%;
  padding: 15px 10px;
`;

export const TitleItem = styled.Text`
  font-family: "Jost-Bold";
  font-size: 20px;
  padding-left: 15px;
`;

export const CardLunchUntried = styled(Shadow).attrs({
  containerViewStyle: {
    marginVertical: "8%",
    marginHorizontal: 15,
  },
  viewStyle: {
    borderRadius: 10,
  },
  distance: 5,
  getChildRadius: false,
  startColor: "#00000015",
})``;

export const ContainerShadow = styled(Shadow).attrs(({ theme }) => ({
  containerViewStyle: {
    marginVertical: "1%",
    marginHorizontal: 15,
  },
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.selection,
    borderRadius: 10,
    height: 42,
    width: "100%",
  },
  distance: 5,
  getChildRadius: false,
  startColor: "#00000015",
}))``;

export const InputItem = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: transparentize(0.6, theme.foreground),
}))`
  height: 42px;
  padding: 10px 10px 10px 0;
  background-color: transparent;
  color: ${({ theme }) => theme.foreground};
  font-size: 16px;
  font-family: "Jost-Regular";
`;

export const InputIconSearch = styled(FontAwesome)<{
  isFocus: boolean;
}>`
  height: 42px;
  padding: 12.5px;
  color: ${({ theme, isFocus }) =>
    isFocus ? theme.foreground : transparentize(0.6, theme.foreground)};
`;
