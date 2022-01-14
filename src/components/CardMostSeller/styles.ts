import { Shadow } from "react-native-shadow-2";
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

export const Container = styled(Shadow).attrs(({ theme }) => ({
  containerViewStyle: {
    marginVertical: "1%",
    marginHorizontal: 5,
  },
  viewStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    flexDirection: "row",
    backgroundColor: theme.orange,
    borderRadius: 8,
    paddingVertical: 8,
    width: "100%",
  },
  distance: 5,
  getChildRadius: false,
  startColor: "#00000008",
}))``;
