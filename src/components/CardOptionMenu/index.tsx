import React from "react";
import { ListRenderItem } from "react-native";
import { Container, ContainerButton, ImageOption, ButtonText } from "./styles";

const CardOptionMenu: ListRenderItem<TMenuOption> = ({ item }) => {
  return (
    <ContainerButton rippleColor="#00000022">
      <Container>
        <ImageOption width={42} height={42} resizeMode="contain" source={{ uri: item.image }} />
        <ButtonText>{item.name}</ButtonText>
      </Container>
    </ContainerButton>
  );
};

export default CardOptionMenu;
