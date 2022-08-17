import React, { useState } from "react";
import { ListRenderItem, View } from "react-native";
import QuantityItemInput from "../QuantityItemInput";
import {
  Container,
  ContainerInformations,
  ContainerInformationsFooter,
  ItemImage,
  ItemTitle,
  PriceItem,
} from "./styles";

// import { Container } from './styles';

const CardOrdered: ListRenderItem<TItemCart> = ({ item }) => {
  // const [quantity, setQuantity] = useState(1);

  // const handleAddItem = () => setQuantity((state) => Math.max(1, state + 1));

  // const handleRemoveItem = () => setQuantity((state) => Math.max(1, state - 1));

  return (
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
            handleAdd={() => {}}
            handleRemove={() => {}}
            quantityItem={item.quantity}
            onChangeText={(value) => {
              // setQuantity(Number(value));
            }}
          />
        </ContainerInformationsFooter>
      </ContainerInformations>
    </Container>
  );
};

export default CardOrdered;
