import React, { useEffect, useRef } from "react";
import {
  FlatList,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Modalize } from "react-native-modalize";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "styled-components/native";

import { Portal } from "react-native-portalize";
import StripeCheckout from "react-native-stripe-checkout-webview";

import CardOrdered from "../components/CardOrdered";
import { useCart } from "../contexts/CartContext";

import { Title } from "../styles/global";

import {
  BodyCart,
  ButtonPurchase,
  ClearButton,
  ClearButtonText,
  Container,
  ContainerHeader,
  ContainerIcon,
  ContainerTotalPrice,
  FooterCart,
  SubTitle,
  TextPurchase,
  TextTotalPrice,
} from "../styles/pages/cart";
import TotalAmounts from "../components/Modals/TotalAmounts";
import StripePayment from "../components/Modals/StripePayment";
import { useNavigation } from "@react-navigation/native";

const Cart: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { itemsInCart, addItemCart, clearCart } = useCart();

  const modalizeRef = useRef<Modalize>(null);
  const paymentModalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <Container>
      <BodyCart>
        <ContainerHeader>
          <Title>Carrinho</Title>
          <ClearButton onPress={() => clearCart()} rippleColor={theme.red}>
            <ClearButtonText>Limpar</ClearButtonText>
          </ClearButton>
        </ContainerHeader>
        {/* <SubTitle>Nenhum pedido a ser concluído.</SubTitle> */}
        <FlatList
          data={itemsInCart}
          renderItem={({ ...props }) => (
            <CardOrdered {...props} addItemCart={addItemCart} />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <SubTitle>Nenhum pedido a ser concluído.</SubTitle>
          }
        />
      </BodyCart>

      {itemsInCart.length !== 0 && (
        <FooterCart
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            elevation: 10,
          }}
        >
          <TouchableOpacity onPress={onOpen}>
            <ContainerTotalPrice>
              <TextTotalPrice>Total com a entrega</TextTotalPrice>
              <ContainerIcon>
                <TextTotalPrice>
                  R${" "}
                  {(
                    itemsInCart.reduce(
                      (accumulator, currentItem) =>
                        accumulator + currentItem.price * currentItem.quantity,
                      0
                    ) + 15
                  ).toFixed(2)}
                </TextTotalPrice>
                <Feather
                  name="chevron-down"
                  color={theme.foreground}
                  size={20}
                />
              </ContainerIcon>
            </ContainerTotalPrice>
          </TouchableOpacity>
          <ButtonPurchase
            onPress={() => {
              (navigation as any).navigate("Stripe");
            }}
          >
            <TextPurchase>Finalizar compra</TextPurchase>
          </ButtonPurchase>
        </FooterCart>
      )}
      <Portal>
        <TotalAmounts modalizeRef={modalizeRef} />
      </Portal>
    </Container>
  );
};

export default Cart;
