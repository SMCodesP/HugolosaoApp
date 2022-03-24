import { darken } from "polished";
import React from "react";
import { ListRenderItem } from "react-native";
import { RectButton } from "react-native-gesture-handler";
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
      <RectButton
        rippleColor="#00000055"
        onPress={() => console.log("clicou!")}
      >
        <ContainerHistoryThumbnail>
          <HistoryThumbnail source={{ uri: item.image }} />
        </ContainerHistoryThumbnail>
        <TitleItem disabled={true}>{item.name}</TitleItem>
        <FooterSectionCard>
          <PriceItem>R$ {item.price}</PriceItem>
        </FooterSectionCard>
      </RectButton>
    </Container>
  );
};

export default CardHistoryItem;
