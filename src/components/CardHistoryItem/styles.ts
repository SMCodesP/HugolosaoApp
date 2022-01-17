import styled from "styled-components/native";
import FastImage from "react-native-fast-image";
import { Shadow } from "react-native-shadow-2";
import TextTicker from "react-native-text-ticker";
import { darken } from "polished";

export const ContainerHistoryThumbnail = styled.View``;

export const HistoryThumbnail = styled(FastImage)`
  width: 160px;
  height: 108px;
  border-radius: 8px;
  margin-left: 8px;
`;

export const TitleItem = styled(TextTicker)`
  margin-top: 5px;
  font-size: 14px;
  font-family: "Jost-Medium";
  margin-left: 8px;
  padding-right: 12px;
`;

export const FooterSectionCard = styled.View`
  margin-left: 8px;
  padding-right: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceItem = styled.Text`
  font-size: 12px;
  font-family: "Jost-Medium";
  color: ${({ theme }) => darken(0.1, theme.green)};
`;

export const TimeoutItem = styled.Text`
  font-size: 12px;
  font-family: "Jost-Medium";
`;

export const Container = styled(Shadow).attrs(({ theme }) => ({
  containerViewStyle: {
    marginVertical: 5,
    marginHorizontal: 5,
  },
  viewStyle: {
    justifyContent: "center",
    backgroundColor: "#fafafa",
    borderRadius: 8,
    paddingVertical: 8,
    width: 176,
  },
  distance: 5,
  getChildRadius: false,
  startColor: "#00000015",
}))``;
