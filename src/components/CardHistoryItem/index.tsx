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
        <HistoryThumbnail source={snacks[item.image]} />
      </ContainerHistoryThumbnail>
      <TitleItem disabled={true}>{item.name}</TitleItem>
      <FooterSectionCard>
        <PriceItem>R$ {item.price}</PriceItem>
        <TimeoutItem>{item.timeout}</TimeoutItem>
      </FooterSectionCard>
    </Container>
  );
};

export default CardHistoryItem;
