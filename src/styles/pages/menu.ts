import { Shadow } from "react-native-shadow-2";
import styled from "styled-components/native";

export const ContainerMenu = styled.View`
  padding: 20px 15px;
`;

export const ContainerOptions = styled.FlatList`
  width: 100%;
`;

export const ContainerShadowSearchInput = styled(Shadow).attrs(({ theme }) => ({
  containerViewStyle: {
    marginVertical: 15,
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
