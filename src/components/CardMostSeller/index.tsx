import React from "react";
import { ListRenderItem, View } from "react-native";

import {
  ButtonMostSeller,
  Container,
  ContainerQuantity,
  Quantity,
  TitleCardMostSeller,
} from "./styles";

import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const CardMostSeller: React.FC<{
  item: THistoryItem;
}> = ({ item }) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    (navigation as any).navigate("Lunch", { item });
  };

  return (
    <ButtonMostSeller onPress={handleNavigation} rippleColor="#00000022">
      <View accessible>
        <Container>
          <TitleCardMostSeller>{item.name}</TitleCardMostSeller>
          <ContainerQuantity>
            <MaterialCommunityIcons size={21} name="crown-outline" />
            <Quantity>{item.sold}</Quantity>
            <Feather size={28} name="chevron-right" />
          </ContainerQuantity>
        </Container>
      </View>
    </ButtonMostSeller>
  );
};

export default CardMostSeller;
