import React from "react";
import { ListRenderItem } from "react-native";
import QuantityItemInput from "../QuantityItemInput";
import {
  Container,
  ContainerInformations,
  ContainerInformationsFooter,
  ItemImage,
  ItemTitle,
  PriceItem,
} from "./styles";

const CardOrdered: React.FC<{
  item: TItemCart;
  addItemCart: (item: TItem, quantity?: number) => void;
}> = ({ item, addItemCart }) => (
  <Container>
    <ItemImage
      source={{
        uri: item.image,
      }}
    />
    <ContainerInformations>
      <ItemTitle>{item.name}</ItemTitle>
      <ContainerInformationsFooter>
        <PriceItem>
          R$ {item.price} x {item.quantity}
        </PriceItem>
        <QuantityItemInput
          handleAdd={() => {
            addItemCart(item, 1);
          }}
          handleRemove={() => {
            addItemCart(item, -1);
          }}
          quantityItem={item.quantity}
          onChangeText={(value) => {}}
        />
      </ContainerInformationsFooter>
    </ContainerInformations>
  </Container>
);

export default CardOrdered;
