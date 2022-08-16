import styled from "styled-components/native";
import TextTicker from "react-native-text-ticker";
import { darken, lighten } from "polished";
import { DefaultText } from "../../styles/global";

export const ContainerHistoryThumbnail = styled.View``;

export const HistoryThumbnail = styled.Image`
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
  color: ${({ theme }) => theme.foreground};
`;

export const FooterSectionCard = styled.View`
  margin-left: 8px;
  padding-right: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceItem = styled(DefaultText)`
  font-size: 12px;
  font-family: "Jost-Medium";
  color: ${({ theme }) => darken(0.1, theme.green)};
`;

export const TimeoutItem = styled(DefaultText)`
  font-size: 12px;
  font-family: "Jost-Medium";
`;

export const ContainerItem = styled.View`
  padding: 8px 0;
`;

export const Container = styled.View`
  justify-content: center;
  background-color: ${({ theme }) => lighten(0.025, theme.selection)};
  border-radius: 8px;
  width: 176px;
`;
