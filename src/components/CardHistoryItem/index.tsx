import React from "react";
import { ListRenderItem } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { NavigationProp, useNavigation } from "@react-navigation/native";

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

const CardHistoryItem: React.FC<{
  item: TItem;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}> = ({ item, navigation }) => {
  const handleNavigation = () => {
    (navigation as any).navigate("Lunch", { item });
  };

  return (
    <Container>
      <RectButton rippleColor="#00000022" onPress={handleNavigation}>
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
