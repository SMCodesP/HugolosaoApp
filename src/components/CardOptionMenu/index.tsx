import React from "react";
import { Container, ContainerButton, ImageOption, ButtonText } from "./styles";

const CardOptionMenu: React.FC = ({ item }) => {
  return (
    <ContainerButton rippleColor="#00000022">
      <Container>
        <ImageOption width={32} height={32} source={{ uri: item.image }} />
        <ButtonText>{item.name}</ButtonText>
      </Container>
    </ContainerButton>
  );
};

export default CardOptionMenu;
