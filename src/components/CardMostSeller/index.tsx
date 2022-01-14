import React from "react";
import { ListRenderItem } from "react-native";

import {
  Container,
  ContainerQuantity,
  Quantity,
  TitleCardMostSeller,
} from "./styles";

import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CardMostSeller: ListRenderItem<TMostSeller> = ({ item }) => {
  return (
    <Container>
      <TitleCardMostSeller>{item.name}</TitleCardMostSeller>
      <ContainerQuantity>
        <MaterialCommunityIcons size={21} name="crown-outline" />
        <Quantity>{item.quantity}</Quantity>
        <Feather size={28} name="chevron-right" />
      </ContainerQuantity>
    </Container>
  );
};

export default CardMostSeller;
