import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { Shadow } from "react-native-shadow-2";
import styled from "styled-components/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Dimensions, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { transparentize } from "polished";
import { DefaultText } from "../../styles/global";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

export const ContainerSession = styled.KeyboardAvoidingView`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: ${HEIGHT - 100}px;
  padding: 0 25px;
  position: relative;
`;

export const ContainerForm = styled.View`
  justify-content: center;
  width: ${WIDTH - 50}px;
  flex: 1;
`;

export const Title = styled(DefaultText)`
  font-size: 36px;
  font-family: "Jost-Medium";
  margin: 5px 0;
  color: ${({ theme }) => theme.foreground};
`;

export const SubTitle = styled(DefaultText)`
  font-size: 15px;
  font-family: "Jost-Regular";
  margin: 5px 0 10% 0;
  color: ${({ theme }) => theme.foreground};
`;

export const ButtonSubmit = styled(RectButton)`
  width: 75%;
  margin-top: 10%;
  padding: 12.5px 0;
  align-items: center;
  align-self: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.currentLine};
`;

export const TextButtonSubmit = styled(DefaultText)`
  font-family: "Jost-Bold";
  font-size: 18px;
  color: ${({ theme }) => theme.foreground};
`;

export const FooterSection = styled.View`
  align-items: center;
  margin-bottom: 15px;
  justify-self: flex-end;
`;

export const DontHaveAccount = styled(DefaultText)`
  font-size: 17px;
  font-family: "Jost-Regular";
  color: ${({ theme }) => theme.foreground};
`;

export const ButtonSignUp = styled(DefaultText)`
  font-size: 15px;
  font-family: "Jost-Medium";
  color: ${({ theme }) => theme.cyan};
`;

export const InputItem = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: transparentize(0.6, theme.foreground),
}))`
  height: 50px;
  padding: 10px 10px 10px 0;
  background-color: transparent;
  color: ${({ theme }) => theme.foreground};
  font-size: 16px;
  font-family: "Jost-Regular";
`;

export const InputIconEmail = styled(FontAwesome)<{
  isFocus: boolean;
}>`
  height: 50px;
  padding: 12.5px;
  color: ${({ theme, isFocus }) =>
    isFocus ? theme.foreground : transparentize(0.6, theme.foreground)};
`;

export const InputIconPassword = styled(SimpleLineIcons)<{
  isFocus: boolean;
}>`
  height: 50px;
  padding: 12.5px;
  color: ${({ theme, isFocus }) =>
    isFocus ? theme.foreground : transparentize(0.6, theme.foreground)};
`;

export const ContainerShadow = styled(Shadow).attrs(({ theme }) => ({
  containerViewStyle: {
    marginVertical: "5%",
  },
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.selection,
    borderRadius: 10,
    height: 50,
    width: "100%",
  },
  distance: 5,
  getChildRadius: false,
  startColor: "#00000005",
}))``;
