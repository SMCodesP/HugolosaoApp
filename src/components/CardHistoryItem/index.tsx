import React from "react";
import { ListRenderItem } from "react-native";
import { snacks } from "../../utils/snacks";

import {
  Container,
  ContainerHistoryThumbnail,
  FooterSectionCard,
  HistoryThumbnail,
  PriceItem,
  TimeoutItem,
  TitleItem,
} from "./styles";

const CardHistoryItem: ListRenderItem<THistoryItem> = ({ item }) => {
  return (
    <Container>
      <ContainerHistoryThumbnail>
        <HistoryThumbnail source={{ uri: item.image }} />
      </ContainerHistoryThumbnail>
      <TitleItem disabled={true}>{item.name}</TitleItem>
      <FooterSectionCard>
        <PriceItem>R$ {item.price}</PriceItem>
      </FooterSectionCard>
    </Container>
  );
};

export default CardHistoryItem;
