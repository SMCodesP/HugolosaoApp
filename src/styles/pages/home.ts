import { transparentize } from "polished";
import { RectButton, TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { DefaultText } from "../global";

export const ContainerHome = styled.View`
  padding: 20px 15px;
`;

export const ContainerHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HomeTitle = styled(DefaultText)`
  font-size: 24px;
  font-family: "Jost-Medium";
  font-weight: medium;
  color: ${({ theme }) => theme.orange};
`;

export const HomeSubTitle = styled(DefaultText)`
  font-size: 16px;
  font-family: "Jost-Regular";
`;

export const UserAvatar = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 46px;
  background-color: #000;
  elevation: 5;
`;

export const IconLunchUntried = styled(MaterialIcons)`
  transform: rotate(-45deg);
`;

export const TextLunchUntried = styled(DefaultText)`
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

export const TitleItem = styled(DefaultText)`
  font-family: "Jost-Bold";
  font-weight: bold;
  font-size: 20px;
  padding-left: 15px;
`;

export const CardLunchUntried = styled.View`
  margin: 8% 15px;
  /* marginVertical: "8%",
marginHorizontal: 15, */
  border-radius: 10px;
`;

export const ContainerShadow = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.selection};
  border-radius: 10px;
  height: 42px;
  width: 95%;
  align-self: center;
`;

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
