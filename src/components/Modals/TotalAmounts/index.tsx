import React from "react";
import { Text, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { IHandles } from "react-native-modalize/lib/options";
import { useTheme } from "styled-components/native";
import { useCart } from "../../../contexts/CartContext";
import {
  Container,
  Information,
  TextImportant,
  TextInformation,
  TitleModal,
} from "./styles";

// import { Container } from './styles';

const TotalAmounts: React.FC<{
  modalizeRef: React.RefObject<IHandles>;
}> = ({ modalizeRef }) => {
  const { itemsInCart } = useCart();
  const theme = useTheme();

  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={200}
      modalHeight={300}
      panGestureEnabled={true}
      modalStyle={{
        backgroundColor: theme.background
      }}
    >
      <Container>
        <TitleModal>Resumo de valores</TitleModal>
        <Information>
          <TextInformation>Subtotal</TextInformation>
          <TextInformation>
            R${" "}
            {itemsInCart
              .reduce(
                (accumulator, currentItem) =>
                  accumulator + currentItem.price * currentItem.quantity,
                0
              )
              .toFixed(2)}
          </TextInformation>
        </Information>
        <Information>
          <TextInformation>Frete</TextInformation>
          <TextInformation>R$ {Number(15).toFixed(2)}</TextInformation>
        </Information>
        <Information>
          <TextImportant>Total</TextImportant>
          <TextImportant>
            R${" "}
            {(
              itemsInCart.reduce(
                (accumulator, currentItem) =>
                  accumulator + currentItem.price * currentItem.quantity,
                0
              ) + 15
            ).toFixed(2)}
          </TextImportant>
        </Information>
      </Container>
    </Modalize>
  );
};

export default TotalAmounts;
