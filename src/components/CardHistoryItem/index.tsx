import React from "react";
import { ListRenderItem } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import {
  Container,
  ContainerHistoryThumbnail,
  ContainerItem,
  FooterSectionCard,
  HistoryThumbnail,
  PriceItem,
  TimeoutItem,
  TitleItem,
} from "./styles";

const CardHistoryItem: ListRenderItem<THistoryItem> = ({ item }) => {
  return (
    <Container>
      <RectButton
        rippleColor="#00000022"
        onPress={() => console.log("clicou!")}
      >
        <ContainerItem>
          <ContainerHistoryThumbnail>
            <HistoryThumbnail source={{ uri: item.image }} />
          </ContainerHistoryThumbnail>
          <TitleItem disabled={true}>{item.name}</TitleItem>
          <FooterSectionCard>
            <PriceItem>R$ {item.price}</PriceItem>
          </FooterSectionCard>
        </ContainerItem>
      </RectButton>
    </Container>
  );
};

export default CardHistoryItem;
