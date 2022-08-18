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

const CardOrdered: ListRenderItem<TItemCart> = ({ item, addItemCart }) => (
  <Container>
    <ItemImage
      source={{
        uri: "https://res.cloudinary.com/animetempest/image/upload/v1645492720/triple_cheese_gkblmf.jpg",
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
